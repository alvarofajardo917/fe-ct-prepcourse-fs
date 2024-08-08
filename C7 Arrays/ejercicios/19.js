function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0; // Si no se pasan argumentos, retornar 0
  }
  
  // Inicializar el producto en 1 (neutro para la multiplicación)
  let producto = 1;
  
  // Iterar sobre los argumentos y multiplicar cada uno
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  
  // Retornar el producto
  return producto;
}

module.exports = multiplicarArgumentos;
