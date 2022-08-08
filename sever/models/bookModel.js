const mongoose = require("mongoose")

const bookModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true

    },
    year: {
        type: Number,
        required: true
    },
    page: {
        type: Number
    },
})

const bookModel = mongoose.model("book", bookModelSchema);

module.exports = bookModel