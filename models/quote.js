const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  anime: { type: String, required: true },
  character: { type: String, required: true },
  quote: { type: String, required: true },
});

module.exports = mongoose.model("Quote", quoteSchema);
