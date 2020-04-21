import React, { useState, useEffect } from 'react';
import Book from './Book';
import * as API from '../utils/API';


function Saved() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    // Flag to invoke rendering of Book List. Render the Book List when this is set to "true"
    const [renderList, setRenderList] = useState(false);

    useEffect(()=> {
        console.log('useEffect is called.');
        API.getSavedBooks()
        .then((res)=>{
            // console.log("books", res);
            setBooks(res);
            setIsLoaded(true);
            setRenderList(false); // Need to reset after useEffect runs 
        })
        .catch((err)=>{
            setIsLoaded(true);
            setIsError(true);
            setRenderList(false); // Need to reset after useEffect runs
        });
    },[renderList]);

    // This function is called from <Book /> 
    // This is called when "Delete" button is clicked.
    function triggerRenderList() {
        console.log("triggerRenderList() called")
        setRenderList(true); // Setting true invokes rendering Book List
    }

    if (isError) { 
        return (
        <div className="container">
            Error
        </div>
        )
    } else if (!isLoaded) {
        return (<div className="container">
            </div>)
    } else if (isLoaded) {
        return (
            <div className="container">
                {books.map((book, index)=>{
                   return <Book key={index} data={book} deleteButton={true} triggerRenderList={triggerRenderList}/>
                })}
            </div>
        )    
    }

}

export default Saved;
