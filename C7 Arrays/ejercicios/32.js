function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const textoInvertido = string.split('').reverse().join('');
  
  // Comparar el string original con el invertido
  return string === textoInvertido;

}

module.exports = esPalindromo;