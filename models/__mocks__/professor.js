const fs = require("fs");
const path = require("path");
const professorTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "professor.json"))
);
const professor = jest.createMockFromModule("../professor.js");

function getProfessor() {
  return professorTodos;
}

function getProfessorByMatricula(matricula) {
  return professorTodos.find((professor) => professor.matricula == matricula);
}

async function createProfessor(professor) {
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

async function updateProfessor(id, professor) {
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

async function deleteProfessor(id) {
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
  getProfessor,
  getProfessorByMatricula,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
