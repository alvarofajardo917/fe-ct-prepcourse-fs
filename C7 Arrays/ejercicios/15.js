function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let indiceMayor = 0;
  let valorMayor = array[0];

  // Recorrer el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Si encontramos un número mayor, actualizamos las variables
    if (array[i] > valorMayor) {
      valorMayor = array[i];
      indiceMayor = i;
    }
  }

  // Devolver el índice del número más grande
  return indiceMayor;



}

module.exports = encontrarIndiceMayor;
