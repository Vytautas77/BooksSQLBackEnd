const express = require("express");
const router = express.Router();
const {
  GET_ALL_BOOKS,
  ADD_BOOK,
  GET_BOOK_BY_ID,
  UPDATE_BOOK,
  DELETE_BOOK,
} = require("../controller/books");

router.get("/books", GET_ALL_BOOKS);

router.get("/books/:id", GET_BOOK_BY_ID);

router.post("/books", ADD_BOOK);

router.put("/books/:id", UPDATE_BOOK);

router.delete("/books/:id", DELETE_BOOK);

module.exports = router;
