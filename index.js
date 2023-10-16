const express = require("express");
var cors = require("cors");
require("dotenv").config();
const booksRouter = require("./routers/books");

const app = express();
app.use(cors());
app.use(express.json());

app.use(booksRouter);
app.use((req, res) => {
  return res.status(404).json({ response: "Endpoint not exits" });
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`App started on port ${process.env.PORT}`);
});
