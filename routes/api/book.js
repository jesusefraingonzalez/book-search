const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// routes to /api/books
router.route("/")
	.get(bookController.findAll)
	.post(bookController.create);
	
// routes to /api/books/:id
router.route("/:id")
	.put(bookController.delete);

module.exports = router;