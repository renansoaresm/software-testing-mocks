const alunoModel = require('../models/aluno.js');
require('iconv-lite').encodingExists('foo');

test('Teste de get Aluno do Banco de dados', () => {
    expect(alunoModel.getAluno(701677)).toEqual({matricula: 701677, nome: 'Abba'});
});

test('Teste de get Todos do Banco de dados', () => {
  return alunoModel.getTodos().then(data => {
    expect(data).toEqual({matricula: 2017390222, nome: 'Renan'});
  })
});