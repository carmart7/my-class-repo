const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true}
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});


// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema)

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: 'Harry Potter', price: 6.20},
  { title: 'Hobbit', price: 50},
  { title: 'Star Wars', price: 100}
]

Library.create(
  {name: 'random library name', books: bookData},
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
)

module.exports = Library;
