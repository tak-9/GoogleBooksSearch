import axios from "axios";

export const getBooks = (title) => {
    return new Promise(function(resolve, reject){
        var url =  "https://www.googleapis.com/books/v1/volumes?q=" + title;
        axios.get(url)
            .then((res)=>{
                console.log("Response from URL: ", res.data.items);
                resolve(res.data.items);
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
