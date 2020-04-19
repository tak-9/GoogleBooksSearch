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
        <div className="card">
            <div className="card-body">
                <i><h4 className="card-title">{title}</h4></i>
                <i>Written by {authors.join(', ')}</i><p/>
                <img className="img-fluid" src={smallThumbnail} width="100" /><p/>
                <a href={infoLilnk} class="btn btn-primary" target="_blank">Detail</a><p/>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Book;