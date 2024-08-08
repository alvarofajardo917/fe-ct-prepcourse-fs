function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(function(elemento) {
    // Verifica si el elemento es un número y si es par
    return typeof elemento === 'number' && elemento % 2 === 0;
  });
}


module.exports = filtrarNumerosPares;
