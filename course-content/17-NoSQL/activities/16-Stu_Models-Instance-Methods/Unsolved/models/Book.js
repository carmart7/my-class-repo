const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    price: { type: Number, required: true},
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    this.price -= .50;
    console.log(`${this.title} costs ${this.price} after the 50 cent discount.`)
};
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const potter = new Book({ title: 'Harry Potter', author: 'Potter Author', price: 6.20});

// TODO: Call the custom instance method on the instance
potter.getDiscount();

module.exports = Book;
