const express = require("express");
// This imports the express library and makes all it's methods available to me
const app = express();
// This just renames express to be app, which is the convention for express
app.use(express.json())

const books = [];

//ROUTES
app.get("/getbook",
    (request,response) => {
        // const book = {
        //     title: "LOTR",
        //     author: "JRR Tolkein",
        //     genre: "fantasy"
        // };
        response.json(books)
    }
)

app.post("/addbook",
    (request,response) => {
    // console.log(request.body.title);
    // console.log(request.body.author);
    // console.log(request.body.genre);
    const book = {
        title : request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }
    books.push(book)
    const responseMessage = {
        msg: `${request.body.title} added to list of books`
    }
    response.json(responseMessage)
    }
)

app.listen(5001, () => console.log("Server running"));