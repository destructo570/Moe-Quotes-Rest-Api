const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sendErrorResponse = require("./controllers/error");

const quotesRoutes = require("./routes/quotes");
const setHeaders = require("./middlewares/setHeaders");

app.use(bodyParser.json());
app.use(setHeaders);

app.use("/api/v1/", quotesRoutes);

app.use(sendErrorResponse);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
