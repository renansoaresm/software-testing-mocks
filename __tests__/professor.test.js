const fs = require("fs");
const path = require("path");
const alunoModel = require("../models/professor.js");
const alunosTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/professorBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Professor do Banco de dados", () => {
  return professorModel.getProfessorByMatricula().then((data) => {
    expect(data).toEqual({ aluno_ID: 6, matricula: 701677, nome: "Abba" });
  });
});

test("Teste de get Todos do Banco de dados", () => {
  return alunoModel.getAlunos().then((data) => {
    expect(data).toEqual(alunosTodosBD);
  });
});

test("Criar Aluno", () => {
  return alunoModel
    .createAluno({ matricula: "123456456", nome: "teste" })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Editar Aluno", () => {
  return alunoModel
    .updateAluno(14, { matricula: "45678", nome: "teste update" })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Deletar Aluno", () => {
  return alunoModel.deleteAluno(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});
