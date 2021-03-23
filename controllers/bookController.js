const { Book } = require("../models");
const { deleteOne } = require("../models/book");

module.exports = {
	findAll: (req, res) => {
		Book
			.find(req.query)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		Book
			.create(req.body)
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},

	delete: (req, res) => {
		Book
			.findById({ _id: req.params.id })
			.then(model => deleteOne(model))
			.then(model => res.json(model))
			.catch(err => res.status(422).json(err));
	},
}