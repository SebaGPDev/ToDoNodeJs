const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/", require("./router/router"));

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
