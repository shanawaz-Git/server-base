const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//----
const postRoute = require("./routes/postRoute");
const getRoute = require("./routes/getRoute");
const putRoute = require("./routes/putRoute");
const deleteRoute = require("./routes/deleteRoute");
//----
require("./db/db-config1");
//----
const app = express();
const PORT = process.env.PORT;
//----
app.use(cors());
app.use(bodyParser.json());
//----
app.use("/", getRoute.routes);
app.use("/post", postRoute.routes);
app.use("/put", putRoute.routes);
app.use("/delete", deleteRoute.routes);
//----
app.listen(PORT, () => {
  console.log(`the server is running in locahost:${PORT}`);
});
