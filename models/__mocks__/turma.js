const fs = require("fs");
const path = require("path");
const turmasTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "turmas.json"))
);
const aluno = jest.createMockFromModule("../turma.js");

function getTurmas() {
  return turmasTodos;
}

function getTurmasByID(id) {
  return turmasTodos.find((turma) => turma.id == id);
}

async function createTurma(turma) {
  if (turma.id >= 2147483647) {
    return { erro: "Turma não criada" };
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 1,
      info: "",
      serverStatus: 2,
      warningStatus: 0,
    },
    null,
  ];
}

async function updateTurma(id, turma) {
  if (turma.id >= 2147483647) {
    return { erro: "Turma não alterada" };
  }
  if (id == 15) {
    return [
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        info: "Rows matched: 0  Changed: 0  Warnings: 0",
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 1,
      },
      null,
    ];
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: "Rows matched: 1  Changed: 1  Warnings: 0",
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 1,
    },
    null,
  ];
}

async function deleteAluno(id) {
  if (id == 36) {
    return [
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        info: "",
        serverStatus: 2,
        warningStatus: 0,
      },
      null,
    ];
  }
  return [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: "",
      serverStatus: 2,
      warningStatus: 0,
    },
    null,
  ];
}

module.exports = {
  getAlunos,
  getAlunoByMatricula,
  createAluno,
  updateAluno,
  deleteAluno,
};