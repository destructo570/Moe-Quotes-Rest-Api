const express = require("express");
const quotesController = require("../controllers/quotes");

const router = express.Router();

router.get("/", quotesController.getRandomQuote);

router.get("/id", quotesController.getQuoteById);

router.get("/all", quotesController.getAllQuotes);

router.get("/anime", quotesController.getQuotesByAnime);

router.get("/character", quotesController.getQuotesByCharacter);

module.exports = router;
