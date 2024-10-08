const express = require("express");
// This imports the express library and makes all it's methods available to me
const app = express();
// This just renames express to be app, which is the convention for express
app.use(express.json())

const books = [];

//ROUTES
app.get("/getbook",
    (request,response) => {
        response.json(books)
    }
)

app.post("/addbook",
    (request,response) => {
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

app.put("/updatebook",
    (request, response) => {
        function findbook(x) {
            return x.title === request.body.title
        }
        const index = books.findIndex(findbook)
        if (index !== -1) 
        {
            books[index].author = request.body.author
            books[index].genre  = request.body.genre
            responseMsg = {
                msg: `author and genre updated for ${request.body.title}`
            }
        } else {
            responseMsg = {
                msg: `${request.body.title} not found`
            }
        }

        response.json(responseMsg)
    }
)

app.delete("/deletebook",
    (request, response) => {
        function findbook(x) {
            return x.title === request.body.title
        }
        const index = books.findIndex(findbook)
        if (index !== -1) 
        {
            books.splice(index,1)
            responseMsg = {
                msg: `${request.body.title} has been deleted`
            }
        } else {
            responseMsg = {
                msg: `${request.body.title} not found`
            }
        }

        response.json(responseMsg)
    }
)

app.listen(5001, () => console.log("Server running"));