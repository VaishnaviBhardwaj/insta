const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("conneted to mongo yeah!!");
});

mongoose.connection.on("error", (err) => {
  console.log("err Connecting", err);
});
require("./models/post");
require("./models/user");
// postman
app.use(express.json()); // middleware
app.use(require("./router/auth"));
app.use(require("./router/post"));

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
