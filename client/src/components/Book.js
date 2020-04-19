import React from "react";
import imageNotAvail from "../img/no_cover_thumb.gif";

function Book(props){
    // console.log("Book props",props);
    const title = (typeof props.data.volumeInfo.title === "undefined") ? " " : props.data.volumeInfo.title ; 
    const authors = (typeof props.data.volumeInfo.authors === "undefined") ? [] : props.data.volumeInfo.authors;
    const description = (typeof props.data.volumeInfo.description === "undefined") ? " " : props.data.volumeInfo.description;
    // Show replacement gif file if API does not provide imageLinks
    const smallThumbnail = (typeof props.data.volumeInfo.imageLinks === "undefined" ? imageNotAvail : props.data.volumeInfo.imageLinks.smallThumbnail);
    const infoLilnk = (typeof props.data.volumeInfo.infoLink === "undefined") ? " " : props.data.volumeInfo.infoLink;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-9">
                        <h4 className="card-title font-italic">{title}</h4>
                        <span className="font-italic">Written by {authors.join(', ')}</span>
                    </div>
                    <div className="col-md-3">
                        <div className=" pull-right">
                        <a href={infoLilnk} className="btn btn-primary" target="_blank">Detail</a> 
                        <a href="#" className="btn btn-primary" target="_blank" style={{ marginLeft: '.5rem' }} >Save</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-fluid" src={smallThumbnail} width="128" />
                    </div>
                    <div className="col-md-10">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;