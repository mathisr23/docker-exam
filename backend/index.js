const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

const cors = require("cors");
const app = express();

const port = 4001
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  res.json({message : "Vous souhaitez accéder aux informations de la piscine n°" + req.params.todos});
});

app.post("/todos", async (req, res) => {
  res.json({message : "Ajoute une nouvelle todo à la liste", methode : req.method});
});

app.delete("/todos/:todoId", async (req, res) => {
  res.json({message : "Suppression d'une todo dans la liste", methode : req.method});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
