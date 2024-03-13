const express = require("express");
const router = express.Router();
const userCotroller = require("../controller/UserCtrl");

router.get("/", userCotroller.getAll);
router.post("/add", userCotroller.postUser);

module.exports = router;
