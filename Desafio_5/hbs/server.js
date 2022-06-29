const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const router = require("./routes/routes");
const routerApi = require("./routes/routesApi");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve(__dirname, "./views/layouts"),
    partialsDir: path.resolve(__dirname, "./views/partials"),
  })
);

app.set("view engine", "hbs");
app.set("views", "./views/");
app.use("/", router);
app.use("/api", routerApi);

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log("Servidor escuchando en puerto: 8080");
});
