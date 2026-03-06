const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:nome/:idade", (req, res) => {
  const { nome, idade } = req.params;

  // Logando no console o que foi digitado
  console.log(`Usuário navegou com nome: ${nome}, idade: ${idade}`);

  // Respondendo sempre com seu nome e idade fixos
  res.status(200).json({
    mensagem: `Nome: Higor, Idade: 25 anos!`
  });
});

app.listen(3007, () => {
  console.log("Servidor on");
});