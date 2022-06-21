const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/html"));

app.use("/api", router);

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log("Servidor escuchando en puerto: 8080");
});
