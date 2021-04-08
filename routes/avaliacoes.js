const express = require("express");
const app = express();
const avaliacaoRouter = express.Router();
const avaliacaoController = require("../controllers/avaliacoesController.js");
avaliacaoRouter.use(express.json());
avaliacaoRouter.use(express.urlencoded({ extended: true }));

avaliacaoRouter.get("/avaliacoes", async function (req, res) {
  let avaliacoes = await avaliacaoController.getAvaliacoes();
  res.send(avaliacoes);
});

avaliacaoRouter.get("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let avaliacoes = await avaliacaoController.getAvaliacaoByID(id);
  res.send(avaliacoes);
});

avaliacaoRouter.post("/avaliacoes", async function (req, res) {
  let avaliacao = req.body;
  let response = await avaliacaoController.createAvaliacao(avaliacao);
  res.send(response);
});

avaliacaoRouter.put("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let avaliacao = req.body;
  let response = await avaliacaoController.updateAvaliacao(id, avaliacao);
  res.send(response);
});

avaliacaoRouter.delete("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let response = await avaliacaoController.deleteAvaliacao(id);
  res.send(response);
});

module.exports = avaliacaoRouter;
