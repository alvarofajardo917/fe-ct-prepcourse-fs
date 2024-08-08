function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  const resultados = [];

  // Iterar hasta un máximo de 10 veces
  for (let i = 1; i <= 10; i++) {
    num += 2; // Aumentar el número en 2
    resultados.push(num); // Guardar el nuevo valor en el array

    // Verificar si el valor actual y la cantidad de iteraciones son iguales
    if (num === i) {
      return "Se interrumpió la ejecución";
    }
  }

  // Retornar el array con los resultados si no hubo interrupción
  return resultados;
}



module.exports = breakStatement;
