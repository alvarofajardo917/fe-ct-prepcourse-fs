function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map(function(elemento, indice) {
    return elemento * indice;
  });
}

module.exports = multiplicarElementosPorIndice;
