const Quote = require("../models/quote");

exports.getAddQuote = (req, res, next) => {
  res.render("admin/add-quote", { pageTitle: "Add a new quote" });
};

exports.postAddQuote = (req, res, next) => {
  const body = req.body;

  const quote = new Quote({
    anime: body.anime,
    character: body.character,
    quote: body.quote,
  });

  quote
    .save()
    .then(() => {
      res.status(201).redirect("/admin/add-quote");
    })
    .catch((err) => {
      console.log("Failed to add quote: ", err);
    });
};

exports.patchQuote = (req, res, next) => {
  const reqBody = req.body;
  const quoteId = req.body.quoteId;

  Quote.findById(quoteId)
    .then((quote) => {
      quote.anime = reqBody.anime;
      quote.character = reqBody.character;
      quote.quote = reqBody.quote;

      return quote.save();
    })
    .then(() => {
      res.status(200).redirect("/admin/add-quote");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteQuote = (req, res, next) => {
  const quoteId = req.body.quoteId;

  Quote.findById(quoteId)
    .then((quote) => {
      return quote.remove();
    })
    .then(() => {
      res.status(200).redirect("/admin/add-quote");
    })
    .catch((err) => {
      console.log("Failed to delete quote: ", err);
    });
};
