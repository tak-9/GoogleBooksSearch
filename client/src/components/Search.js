import React, {useState} from "react";
import Book from "./Book";
import * as API from "../utils/API";


function Search() {
    const [keyword, setKeyword] = useState();
    const [books, setBooks] = useState([]);

    const handleClick = e => {
        e.preventDefault();
        API.getBooks(keyword)
        .then((res)=>{
            setBooks(res)
        });
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <p className="font-weight-bold">Book Search</p>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" 
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            />
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleClick}>Search</button>
                </div>
            </div> {/* end Card */}
            <p/>
           {books.map((book, index)=>{
               return <Book key={index} data={book} />
           })}
        </div>
    );
}

export default Search;
