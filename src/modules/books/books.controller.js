import bookModel from "../../../connectionDB/models/books.model.js";
///////////////////////////--getBooks--///////////////////////////
export const getBooks = async (req, res, next) => {
  try {
    const books = await bookModel.find();
    return res.status(200).json({ msg: "DONE", books });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--createBook--///////////////////////////

export const createBook = async (req, res, next) => {
  try {
    const { title, content, author, publisheddate } = req.body;

    const titleExist = await bookModel.findOne({ title });
    if (titleExist) {
      return res.status(400).json({ msg: "title already exists" });
    }
    const book = await bookModel.create(req.body);
    res.status(200).json({ msg: "DONE", book });
  } catch (error) {
    res.status(400).json({ msg: "Error creating book", error });
  }
};
///////////////////////////--getSingleBook--///////////////////////////

export const getSingleBook = async (req, res, next) => {
  try {
    const books = await bookModel.findById({ _id: req.body.id });
    return res.status(200).json({ msg: "DONE", books });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--updateBook--///////////////////////////

export const updateBook = async (req, res, next) => {
  try {
    const { id, title } = req.body;

    const IdExist = bookModel.findOne({ id });
    if (!IdExist) {
      return res.status(400).json({ msg: "Book not found" });
    }
    const book = await bookModel.updateOne({ _id: id }, { title });
    res.status(200).json({ msg: "DONE", book });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--DeleteBook--///////////////////////////

export const DeleteBook = async (req, res, next) => {
  try {
    const { id } = req.body;
    const IdExist = await bookModel.findOne({ id });
    if (!IdExist) {
      return res.status(400).json({ msg: "Book not found" });
    }
    const book = await bookModel.deleteOne({ _id: id });
    res.status(200).json({ msg: "DONE", book });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
