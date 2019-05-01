const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .get(booksController.findall)
    .post(booksController.create);

module.exports = router;