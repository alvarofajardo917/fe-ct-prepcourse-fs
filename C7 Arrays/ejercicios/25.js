function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let conteoPares = 0;

  // Recorrer el array de números
  for (let i = 0; i < numeros.length; i++) {
    // Si el número es impar, continuar con la siguiente iteración
    if (numeros[i] % 2 !== 0) {
      continue;
    }

    // Incrementar el conteo de pares
    conteoPares++;
  }

  // Retornar el conteo de números pares
  return conteoPares;
}

module.exports = contarParesConContinue;
