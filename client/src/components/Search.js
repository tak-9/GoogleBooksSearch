import React, {useState} from "react";
import axios from "axios";
import Book from "./Book";


function Search() {
    const [keyword, setKeyword] = useState();
    const [books, setBooks] = useState([]);

    const handleClick = e =>{
        e.preventDefault();
        var url =  "https://www.googleapis.com/books/v1/volumes?q="+keyword;
        axios.get(url)
            .then((res)=>{
                console.log("Response from URL: ",res.data.items);
                setBooks(res.data.items);
            })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <p className="font-weight-bold">Book Search</p>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" value={keyword}  onChange={e => setKeyword(e.target.value) }/>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleClick}>Search</button>
                </div>
            </div> {/* end Card */}
            <p/>
           {books.map((book)=>{
               return <Book data={book} />
           })}
        </div>
    );
}

export default Search;
