import authorModel from "../../../connectionDB/models/author.model.js";
///////////////////////////--getAuthor--///////////////////////////
export const getAuthor = async (req, res, next) => {
  try {
    const author = await authorModel.find();
    return res.status(200).json({ msg: "DONE", author });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--createAuthor--///////////////////////////

export const createAuthor = async (req, res, next) => {
  try {
    const { name, bio, birthDate, bookId } = req.body;

    const bookIdExist = await authorModel.findOne({ bookId });
    if (bookIdExist) {
      return res.status(400).json({ msg: "bookId already exists" });
    }
    const authors = await authorModel.create(req.body);
    res.status(200).json({ msg: "DONE", authors });
  } catch (error) {
    res.status(400).json({ msg: "Error creating book", error });
  }
};
///////////////////////////--getSingleAuthor--///////////////////////////

export const getSingleAuthor = async (req, res, next) => {
  try {
    const author = await authorModel.findById({ _id: req.body.id });
    return res.status(200).json({ msg: "DONE", author });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--updateAuthor--///////////////////////////

export const updateAuthor = async (req, res, next) => {
  try {
    const { id, name } = req.body;

    const IdExist = authorModel.findOne({ id });
    if (!IdExist) {
      return res.status(400).json({ msg: "Book not found" });
    }
    const book = await authorModel.updateOne({ _id: id }, { name });
    res.status(200).json({ msg: "DONE", book });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
///////////////////////////--DeleteAuthor--///////////////////////////

export const DeleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.body;
    // const IdExist = await authorModel.findOne({ id });
    // if (!IdExist) {
    //   return res.status(400).json({ msg: "Author not found" });
    // }
    const author = await authorModel.deleteOne({ _id: id });
    res.status(200).json({ msg: "DONE", author });
  } catch (error) {
    return res.status(400).json({ msg: "404 Error" });
  }
};
