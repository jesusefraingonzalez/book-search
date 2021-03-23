const { Schema, model } = require("mongoose");

const bookSchema = new Schema ({
	title: {
		type: String,
		required: true
	},
	authors: {
		type: String,
		required: true
	},
	description: String,
	image: String,
	link: String,
})

const Book = model("Book", bookSchema);

module.exports = Book;