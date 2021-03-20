20
const aluno = jest.createMockFromModule('../aluno.js');

function getTodos() {
  return (
    [{
      "matricula": 2017390222,
      "nome": "Renan"
    }, {
      "matricula": 2017390281,
      "nome": "Sidney"
    }, {
        "matricula": 715752,
        "nome": "Lana"
    }, {
        "matricula": 684958,
        "nome": "Lanita"
    }, {
        "matricula": 695665,
        "nome": "Barbabra"
    }, {
        "matricula": 701677,
        "nome": "Abba"
    }, {
        "matricula": 665444,
        "nome": "Lurleen"
    }, {
        "matricula": 654384,
        "nome": "Melli"
    }, {
        "matricula": 721653,
        "nome": "Margot"
    }, {
        "matricula": 733699,
        "nome": "Arlee"
    }, {
        "matricula": 727993,
        "nome": "Findley"
    }, {
        "matricula": 702409,
        "nome": "Tory"
    }]
  )
}


function getAluno(matricula) {
  return ({
    matricula: 715752,
    nome: 'Abba',
  });
}


module.exports = {
    getAluno,
    getTodos
}