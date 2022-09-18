const express = require("express");
const quotesController = require("../controllers/quotes");

const router = express.Router();

router.get("/", quotesController.getRandomQuote);

router.get("/id/:quoteId", quotesController.getQuoteById);

router.get("/anime/:animeName", quotesController.getQuotesByAnime);

router.get("/character/:characterName", quotesController.getQuotesByCharacter);

module.exports = router;
