import express from "express";
import connectionDB from "./connectionDB/connection.js";
import booksRouter from "./src/modules/books/books.routes.js"
import authorRouter from "./src/modules/author/author.routes.js"


const app = express();
const port = 3000;
app.use(express.json())

connectionDB()

app.use("/books", booksRouter)
app.use("/authors", authorRouter);

app.get("*", (req, res) => {
  res.status(404).json("404 Page Not Found");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
