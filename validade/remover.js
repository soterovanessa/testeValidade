function removerPrimeiroEUltimo(lista) {
  if (lista.length > 1) {
    lista.shift();

    lista.pop();
  }

  return lista;
}

const validades = [
  "ate amanha",
  "ate hoje",
  "ja venceu",
  "ate amanha",
  "ate hoje",
];

const listaModificada = removerPrimeiroEUltimo(validades.slice());
console.log(listaModificada);
