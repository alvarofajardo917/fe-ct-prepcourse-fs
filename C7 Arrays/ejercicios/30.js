function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    // Comparar el número actual con todos los números siguientes en el array
    for (let j = i + 1; j < numeros.length; j++) {
      // Si encontramos un número igual al actual, es el primer repetido
      if (numeros[i] === numeros[j]) {
        return numeros[i];
      }
    }
  }
}

module.exports = encontrarElementoRepetido;