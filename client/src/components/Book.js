import React from "react";


function Book(props){
    console.log("Book props",props);
    // BUG: Harry Potter , this causes imageLinks to become undefined 
    const title = props.data.volumeInfo.title;
    const authors = props.data.volumeInfo.authors;
    const description = props.data.volumeInfo.description;
    const smallThumbnail = props.data.volumeInfo.imageLinks.smallThumbnail;
    const infoLilnk = props.data.volumeInfo.infoLink;

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
                        <a href={infoLilnk} class="btn btn-primary" target="_blank">Detail</a> 
                        <a href="#" class="btn btn-primary" target="_blank" style={{ marginLeft: '.5rem' }} >Save</a>
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