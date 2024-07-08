function esNumeroPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return false;
  }
  
  // Verificar si el número es divisible por algún número desde 2 hasta su raíz cuadrada
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }
  
  return true; // Si no fue divisible por ningún número, es primo
}

module.exports = esNumeroPrimo;
