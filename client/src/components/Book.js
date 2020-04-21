import React from "react";
import imageNotAvail from "../img/no_cover_thumb.gif";
import * as API from "../utils/API"

function Book(props) {
    console.log("Book props", props);
    const {title, authors, description, smallThumbnail, infoLilnk} = props.data;
    
    const saveButtonHandler = () => {
        API.saveBook(props.data)
        .then((res)=>{
            alert("Save successful");
        })
        .catch(()=>{
            alert("Error in Saving book.");
        })
    };

    const deleteButtonHandler = () => {
        API.deleteBook(props.data._id)
        .then((res)=>{
            props.triggerRenderList();   
        })
        .catch(()=>{
            alert("Error in delete.");
        })
    };

    // Display "Delete" button for Saved page. "Save" for Search page.
    var saveOrDeleteButton;
    if (props.deleteButton){
        saveOrDeleteButton = (
            <button onClick={deleteButtonHandler} className="btn btn-primary" style={{ marginLeft: '.5rem' }}>
            Delete
            </button>
        )
    } else {
        saveOrDeleteButton = (
            <button onClick={saveButtonHandler} className="btn btn-primary" style={{ marginLeft: '.5rem' }}>
            Save
            </button>
        )
    } 

    var smallThumbnailDisplay;
    // Display replcement thumbnail image if Google book API does not provide it. 
    (smallThumbnail === "NoImage") ? smallThumbnailDisplay = imageNotAvail : smallThumbnailDisplay = smallThumbnail;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-7">
                        <h4 className="card-title font-italic">{title}</h4>
                        <span className="font-italic">Written by {authors.join(', ')}</span>
                    </div>
                    <div className="col-md-5">
                        <div className="pull-right">
                            <a href={infoLilnk} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Detail</a>
                            {saveOrDeleteButton}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-fluid" src={smallThumbnailDisplay} alt="Thumbnail" width="128" />
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