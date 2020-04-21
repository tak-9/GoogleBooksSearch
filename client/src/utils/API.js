import axios from "axios";
var serverUrl =  "http://localhost:3001";


export const getBooks = (title) => {
    return new Promise(function(resolve, reject){
        var url =  "https://www.googleapis.com/books/v1/volumes?q=" + title;
        axios.get(url)
            .then((res)=>{
                console.log("Response from URL: ", url, res.data.items);
                var booksInfo = [];
                booksInfo = res.data.items.map((item)=>{
                    // Format received data
                    const title = (typeof item.volumeInfo.title === "undefined") ? " " : item.volumeInfo.title;
                    const authors = (typeof item.volumeInfo.authors === "undefined") ? [] : item.volumeInfo.authors;
                    const description = (typeof item.volumeInfo.description === "undefined") ? " " : item.volumeInfo.description;
                    // Show replacement gif file if API does not provide imageLinks
                    const smallThumbnail = (typeof item.volumeInfo.imageLinks === "undefined" ? "NoImage" : item.volumeInfo.imageLinks.smallThumbnail);
                    const infoLilnk = (typeof item.volumeInfo.infoLink === "undefined") ? " " : item.volumeInfo.infoLink;
                    const bookInfo = {title, authors, description, smallThumbnail, infoLilnk};
                    return bookInfo;
                });
                //console.log("API booksInfo",booksInfo);
                resolve(booksInfo);

            })
            .catch((err)=>{
                console.log("Error in getBooks(): ", err);
                resolve([{
                    title: "Search Error. Please try again later."
                }]);
            })     
    })
}

export const saveBook = (book) => {
    return new Promise(function(resolve, reject){
        console.log("API saveBook()", book);
        var url = serverUrl + "/api/book";

        axios.post(url, book)
            .then((res)=>{
                console.log("Response from URL: ", url, res);
                resolve();
            })
            .catch((err)=>{
                console.log("Error in saveBook(): ", err);
                resolve();
            })     
    })
}

export const getSavedBooks = (title) => {
    return new Promise(function(resolve, reject){
        var url =  serverUrl + "/api/book";
        axios.get(url)
            .then((res)=>{
                console.log("Response from URL: ", url, res);
                resolve(res.data);
            })
            .catch((err)=>{
                console.log("Error in getBooks(): ", err);
                resolve([{
                    volumeInfo: {
                        title: "Search Error. Please try again later."
                    }
                }]);
            })     
    })
}

export const deleteBook = (id) => {
    return new Promise(function(resolve, reject){
        console.log("API.deleteBook()");
        var url =  serverUrl + "/api/book/" + id;
        axios.delete(url)
            .then((res)=>{
                console.log("Response from URL: ", url, res);
                resolve(res.data);
            })
            .catch((err)=>{
                console.log("Error in getBooks(): ", err);
                resolve([{
                    volumeInfo: {
                        title: "Search Error. Please try again later."
                    }
                }]);
            })     
    })
}
