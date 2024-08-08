function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  if (array.length === 0 || array.length === 1) {
    return true;
  }

  // Obtener el primer elemento del array
  const primerElemento = array[0];
  
  // Verificar si todos los elementos son iguales al primer elemento
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false; // Retornar false si se encuentra un elemento diferente
    }
  }
  
  // Si todos los elementos son iguales, retornar true
  return true;
}


module.exports = todosIguales;
