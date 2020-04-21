import React from "react";
import imageNotAvail from "../img/no_cover_thumb.gif";
import * as API from "../utils/API"

function Book(props) {
    // console.log("Book props", props);
    const {title, authors, description, smallThumbnail, infoLilnk} = props.data;
    
    const saveButtonHandler = () => {
        console.log("saveButtonHandler");
        API.saveBook(props.data);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-9">
                        <h4 className="card-title font-italic">{title}</h4>
                        <span className="font-italic">Written by {authors.join(', ')}</span>
                    </div>
                    <div className="col-md-3">
                        <div className="pull-right">
                            <a href={infoLilnk} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Detail</a>
                            <button onClick={saveButtonHandler} className="btn btn-primary" style={{ marginLeft: '.5rem' }}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-fluid" src={smallThumbnail} alt="Thumbnail" width="128" />
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