const router = require("express").Router();
const bookRoutes = require("./book");

// routes to /api/books
router.use("/books", bookRoutes);

module.exports = router;