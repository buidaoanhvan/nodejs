const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../../helpers/async.handler");
const accessController = require("../../controllers/access.controller");

router.get("/signup", asyncHandler(accessController.signUp));

module.exports = router;
