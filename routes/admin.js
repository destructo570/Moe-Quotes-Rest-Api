const express = require("express");
const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get("/add-quote", adminControllers.getAddQuote);

router.post("/add-quote", adminControllers.postAddQuote);

router.patch("/update-quote", adminControllers.patchQuote);

router.delete("/remove-quote", adminControllers.deleteQuote);

module.exports = router;
