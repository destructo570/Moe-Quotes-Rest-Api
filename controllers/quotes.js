const Quote = require("../models/quote");
const { throwError } = require("../utils/helpers");

exports.getAllQuotes = async (_, res, next) => {
  try {
    const [rows] = await Quote.fetchAll();
    if (!rows) throwError("Quote not found!", 404);

    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

exports.createQuote = async (req, res, next) => {
  try {
    const body = req.body;
    Quote.create({
      quote: body.quote,
      anime: body.anime,
      character: body.character
    }).then(()=>{
      res.status(200).json(req.body);
    }).catch(err => {
      throwError(err, 404);
    })

  } catch (err) {
    next(err);
  }
};

exports.getRandomQuote = async (_, res, next) => {
  try {
    const quote = await Quote.aggregate([{ $sample: { size: 1 } }]);
    if (!quote) throwError("Quote not found!", 404);

    res.status(200).json(quote);
  } catch (err) {
    next(err);
  }
};

exports.getQuoteById = async (req, res, next) => {
  try {
    const quoteId = req.query.quoteId;
    if (!quoteId) throwError("Bad Request!", 400);

    const quote = await Quote.findById(quoteId);
    if (!quote) throwError("Quote not found!", 404);

    res.status(200).json(quote);
  } catch (err) {
    next(err);
  }
};

exports.getQuotesByAnime = async (req, res, next) => {
  try {
    const animeName = req.query.anime;
    if (!animeName) throwError("Bad Request!", 400);

    const result = await Quote.find({
      anime: { $regex: new RegExp(animeName, "i") },
    });

    if (!result) throwError("No quotes found!", 404);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getQuotesByCharacter = async (req, res, next) => {
  try {
    const characterName = req.query.character;
    if (!characterName) throwError("Bad Request!", 400);

    const result = await Quote.find({
      character: { $regex: new RegExp(characterName, "i") },
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
