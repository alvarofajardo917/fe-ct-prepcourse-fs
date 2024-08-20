const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Usar el callback para verificar si el elemento actual cumple la condición.
    if (callback(array[i])) {
      // Si el callback retorna true, devuelve el elemento encontrado.
      return array[i];
    }
  }

  // Si ningún elemento cumple la condición, devuelve el mensaje.
  return "No se encontró el elemento";
};


module.exports = buscarElemento;
