function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Retornar null si el array está vacío
  }

  // Ordenar el array para asegurar que los números estén en secuencia
  numeros.sort((a, b) => a - b);

  // Calcular el primer y último número en la secuencia
  const primerNumero = numeros[0];
  const ultimoNumero = numeros[numeros.length - 1];

  // Calcular la suma esperada de la secuencia completa
  const sumaEsperada = (ultimoNumero * (ultimoNumero + 1)) / 2 - (primerNumero * (primerNumero - 1)) / 2;

  // Calcular la suma actual de los números en el array
  const sumaActual = numeros.reduce((acc, num) => acc + num, 0);

  // Encontrar el número faltante
  const numeroFaltante = sumaEsperada - sumaActual;

  return numeroFaltante || null;
}

module.exports = encontrarNumeroFaltante;