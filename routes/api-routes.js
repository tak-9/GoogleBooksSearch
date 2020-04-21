const db = require("../models");

module.exports = function (app) {

    // This outputs all saved google books.
    app.get("/api/book", (req, res) => {
        console.log("GET /api/book is called.", req.body);
        db.Googlebooks.find({})
            .then((dbResult)=>{
                //console.log("find ok", dbResult);
                res.json(dbResult);
            })
            .catch((err)=> {
                console.log(err);
                res.json(500).json(err);
            });
    });

    // This is called when "Save" button is clicked. 
    app.post("/api/book", (req, res) => {
        console.log("POST /api/book is called.", req.body);
        // Insert received data
        db.Googlebooks.create(req.body)
        .then((dbResult) => {
            //console.log("insert ok", dbResult);
            res.status(200).json(dbResult);
        })
        .catch((err) => {
            console.log("insert err", err);
            res.status(500).json(err);
        });
    });


};
