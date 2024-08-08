function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  const strings = [str1, str2, str3].filter(s => s.length > 0);
  
  // Encuentra la longitud del string más largo
  const maxLength = Math.max(...strings.map(s => s.length));
  
  // Inicializar el resultado como una cadena vacía
  let resultado = '';

  // Alternar los caracteres de cada string
  for (let i = 0; i < maxLength; i++) {
    for (const str of strings) {
      if (i < str.length) {
        resultado += str[i];
      }
    }
  }

  return resultado;
}

module.exports = combine;