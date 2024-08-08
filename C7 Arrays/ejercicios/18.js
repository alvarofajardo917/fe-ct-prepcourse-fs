function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
  
  // Calcular el promedio dividiendo la suma entre la cantidad de elementos
  const promedio = suma / resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
