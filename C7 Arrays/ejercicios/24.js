function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  const resultados = [];

  // Iterar hasta un máximo de 10 veces
  for (let i = 1; i <= 10; i++) {
    // Si el número de iteraciones es 5, continuar con la siguiente iteración
    if (i === 5) {
      continue;
    }

    // Aumentar el número en 2
    num += 2;

    // Guardar el nuevo valor en el array
    resultados.push(num);
  }

  // Retornar el array con los resultados
  return resultados;
}

module.exports = continueStatement;
