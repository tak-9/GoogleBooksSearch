import React, { useState, useEffect } from 'react';
import Book from './Book';
import * as API from '../utils/API';


function Saved() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=> {
        console.log('useEffect is called.');
        API.getSavedBooks()
        .then((res)=>{
            // console.log("books", res);
            setBooks(res);
            setIsLoaded(true);
        })
        .catch((err)=>{
            setIsLoaded(true);
            setIsError(true);
        });
    },[]);


    if (isError) { 
        return (
        <div className="container">
            Error
        </div>
        )
    } else if (!isLoaded) {
        return (<div className="container">
            Loading...
            </div>)
    } else {
        return (
            <div className="container">
                {books.map((book, index)=>{
                   return <Book key={index} data={book} />
                })}
            </div>
        )    
    }

}

export default Saved;
