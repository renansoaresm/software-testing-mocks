const avaliacaoModel = require("../models/avaliacao.js");

async function getAvaliacoes() {
  let avaliacao = await avaliacaoModel.getAvaliacoes();
  return avaliacao;
}

async function getAvaliacaoByID(id) {
  let avaliacao = await avaliacaoModel.getAvaliacaoByID(id);
  return avaliacao;
}

async function createAvaliacao(avaliacao) {
  let response = await avaliacaoModel.createAvaliacao(avaliacao);
  return response;
}

async function updateAvaliacao(id, avaliacao) {
  let response = await avaliacaoModel.updateAvaliacao(id, avaliacao);
  return response;
}

async function deleteAvaliacao(id) {
  let response = await avaliacaoModel.deleteAvaliacao(id);
  return response;
}

module.exports = {
  getAvaliacoes,
  getAvaliacaoByID,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
