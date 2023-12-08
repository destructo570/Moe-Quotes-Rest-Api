const express = require("express");
const sequelize = require("./utils/database");
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

sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 3000);
});
