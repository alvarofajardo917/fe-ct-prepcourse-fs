function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (let i = 0; i < secuencia.length; i++) {
    // Verificar si el número actual es un múltiplo de n
    if (secuencia[i] % n === 0) {
      return secuencia[i]; // Retornar el primer múltiplo encontrado
    }
  }
}

module.exports = encontrarPrimerMultiploDeN;

