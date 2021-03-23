const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

// routes to /api/
router.use("/api", apiRoutes);

// catch-all route sends index.html
router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
