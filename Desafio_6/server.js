const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const Product = require("./classes/products.js");
const router = require("./routes/routes");
const routerApi = require("./routes/routesApi");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const moment = require("moment");

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
app.use("/static", express.static("/public"));
app.use("/public", express.static(__dirname + "/public"));

const messages = [];

io.on("connection", (socket) => {
  emitMessages();

  socket.on("new-message", function (data) {
    data.date = moment().format("DD/MM/YYYY");
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});

const emitMessages = () => io.sockets.emit("messages", messages);

server.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log("Servidor escuchando en puerto: 8080");
});
