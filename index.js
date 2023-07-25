const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const model = require("./models");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.render("index");
// });

require("./controller/app")(app);

model.sequelize
  .authenticate()
  .then(() => {
    app.listen(4000, () => {
      console.log("server is up and running at port 4000");
    });
  })
  .catch((error) => console.error(error));
