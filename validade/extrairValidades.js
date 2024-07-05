function extrairValidades(listaComidas) {
  const validades = [];

  listaComidas.forEach((comida) => {
    validades.push(comida.validade);
  });

  return validades;
}

const listaComidas = [
  {
    nome: "Creme de Abacate",
    ingredientes: ["leite", "acucar", "abacate"],
    validade: "ate amanha",
  },
  {
    nome: "Bolo de mamao",
    ingredientes: ["farinha", "leite", "mamao"],
    validade: "ate hoje",
  },
  {
    nome: "Sopa de atum",
    ingredientes: ["agua", "sal", "atum"],
    validade: "ja venceu",
  },
  {
    nome: "Bolo de rolo",
    ingredientes: ["farinha", "manteiga", "acucar", "ovo"],
    validade: "ate amanha",
  },
  {
    nome: "Cuzcuz",
    ingredientes: ["cuzcuz", "sal", "agua"],
    validade: "ate hoje",
  },
];

const validades = extrairValidades(listaComidas);
console.log(validades);
