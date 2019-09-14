// Requring The Mongoose
var mongoose = require("mongoose");

// Extracting The Schema From Mongoose
var schema = mongoose.Schema;

// Making The Schema For Books
var bookSchema = new schema({
    title : {
        type: String,
        requried: true
    },
    author: {
        type: String,
        requried: true
    }
},{timestamps: true});

// Making The Model Of Schema
var Books = mongoose.model("Books",bookSchema);

// Exporting the Model Of Schema
module.exports = Books;