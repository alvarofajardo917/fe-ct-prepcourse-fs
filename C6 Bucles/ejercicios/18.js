function productoEntreNumeros(a, b) {
  // Asegurarse de que "a" es menor o igual que "b"
  if (a > b) {
    // Si "a" es mayor que "b", devolvemos 0
    return 0;
  }

  // Inicializamos el producto en 1
  let producto = 1;

  // Calculamos el producto de todos los números entre "a" y "b" (inclusive)
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  // Retornamos el producto calculado
  return producto;
}

module.exports = productoEntreNumeros;
