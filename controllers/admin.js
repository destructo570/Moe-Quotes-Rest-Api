const Quote = require("../models/quote");

exports.getAddQuote = (_, res) => {
  res.render("admin/add-quote", { pageTitle: "Add a new quote" });
};

exports.postAddQuote = (req, res) => {
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

exports.patchQuote = (req, res, _) => {
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

exports.deleteQuote = (req, res) => {
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
