const connect = require("./db.js").connect;

async function getAvaliacoes() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM avaliacao;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAvaliacaoByID(id) {
  const conn = await connect();
  let [rows] = await conn.query(
    "SELECT * FROM avaliacao where avaliacao_ID=?;",
    [id]
  );
  let returnValue = rows[0];
  return returnValue;
}

async function createAvaliacao(avaliacao) {
  const conn = await connect();
  const sql =
    "INSERT INTO avaliacao (turma_ID,aluno_ID,peso,nota) VALUES (?,?,?,?);";
  const values = [
    avaliacao.turma,
    avaliacao.aluno,
    avaliacao.peso,
    avaliacao.nota,
  ];
  return await conn.query(sql, values);
}

async function updateAvaliacao(id, avaliacao) {
  const conn = await connect();
  const sql =
    "UPDATE avaliacao SET turma_ID=?, aluno_ID=?, peso=?, nota=? WHERE avaliacao_ID=?";
  const values = [
    avaliacao.turma,
    avaliacao.aluno,
    avaliacao.peso,
    avaliacao.nota,
    id,
  ];
  return await conn.query(sql, values);
}

async function deleteAvaliacao(id) {
  const conn = await connect();
  const sql = "DELETE FROM avaliacao where avaliacao_ID=?;";
  return await conn.query(sql, [id]);
}

module.exports = {
  getAvaliacoes,
  getAvaliacaoByID,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
