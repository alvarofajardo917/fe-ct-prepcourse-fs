function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   if (str1.length !== str2.length) return false;

   // Convertimos ambos strings a minúsculas para evitar problemas con mayúsculas
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
 
   // Convertimos los strings en arreglos de letras, los ordenamos y los unimos de nuevo
   let string1Ordenado = str1.split('').sort().join('');
   let string2Ordenado = str2.split('').sort().join('');
 
   // Si los strings ordenados son iguales, entonces son anagramas
   return string1Ordenado === string2Ordenado;
}

module.exports = esAnagrama;
