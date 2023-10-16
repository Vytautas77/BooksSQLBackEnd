const db = require("../db");

const GET_ALL_BOOKS = async (req, res) => {
  try {
    const books = await db.query("SELECT * FROM public.books");

    return res.json({ books: books.rows });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const GET_BOOK_BY_ID = async (req, res) => {
  try {
    const book = await db.query(
      `SELECT * FROM public.books WHERE book_id= ${req.params.id}`
    );
    return res.json({ book: book.rows[0] });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const ADD_BOOK = async (req, res) => {
  try {
    const book = await db.query(`INSERT INTO public.books(
      title, release_year)
      VALUES ('${req.body.title}', ${req.body.release_year})`);

    return res.status(201).json({ response: "Book was added", book });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const UPDATE_BOOK = async (req, res) => {
  try {
    const book = await db.query(`UPDATE public.books
     SET title='${req.body.title}', release_year=${req.body.release_year}
      WHERE book_id = ${req.params.id}`);

    return res.status(200).json({ status: "Book was updated", book });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const DELETE_BOOK = async (req, res) => {
  try {
    const book = await db.query(
      `DELETE FROM public.books WHERE book_id= ${req.params.id}`
    );

    return res.json({ book, status: "Book was deleted" });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

module.exports = {
  GET_ALL_BOOKS,
  ADD_BOOK,
  GET_BOOK_BY_ID,
  UPDATE_BOOK,
  DELETE_BOOK,
};
