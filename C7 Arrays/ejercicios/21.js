function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  const mesesEncontrados = [];

  // Recorrer el array para encontrar los meses
  for (let i = 0; i < array.length; i++) {
    const mes = array[i];
    // Si el mes está en el array de meses buscados, agregarlo a mesesEncontrados
    if (mesesBuscados.includes(mes)) {
      mesesEncontrados.push(mes);
    }
  }

  // Verificar si se encontraron todos los meses buscados
  if (mesesEncontrados.length === mesesBuscados.length) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
