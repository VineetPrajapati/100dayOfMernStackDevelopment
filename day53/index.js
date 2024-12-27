// Jan 01, 2025
// Day 53: Practice building CRUD operations for a sample resource (e.g., Books or Users).
const express = require("express");
const app = express();

const fs = require("fs");

// json data
const books = require("./MOCK_DATA.json");

// middleware
app.use(express.json());

// get all the books
app.get("/books", (req, res) => {
  res.json(books);
});

// get all the books by id
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      success: false,
      error: "Book not found!",
    });
  }

  res.status(200).json({
    success: true,
    data: book,
  });
});

// add new book
app.post("/books", (req, res) => {
  const body = req.body;

  books.push({ id: books.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(books), (err, data) => {
    return res.status(201).json({
      success: true,
      message: "new book data added",
    });
  });
});

// update the user
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found!",
    });
  }
  const { title, author, publisher, publishedYear, language } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.publisher = publisher || book.publisher;
  book.publishedYear = publishedYear || book.publishedYear;
  book.language = language || book.language;

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(books), (err, data) => {
    return res.status(201).json({
      success: true,
      message: "Existing entry updated",
    });
  });
});

// delete entry by id
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Failed to update book.",
    });
  }
  books.splice(bookIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(books), (err, data) => {
    res.status(200).json({
      success: true,
      data: bookIndex,
    });
  });
});

app.listen(8080, () => console.log(`Server started!`));
