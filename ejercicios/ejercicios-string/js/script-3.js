$(function () {
  const $parrafo = $('#resultado')
  const VOCALES = ['a', 'e', 'i', 'o', 'u']

  $('#boton').on('click', function () {
    const texto = $('#texto').val()
    let cantidadVocales = 0

    for (let i = 0; i < VOCALES.length; i++) {
      cantidadVocales += vecesLetra(texto.toLowerCase(), VOCALES[i])
    }

    $parrafo.html(cantidadVocales === 0 ? `No hay vocales` : cantidadVocales)
  })
})

function vecesLetra(texto, letra) {
  let ultimoIndex = 0,
    contador = 0

  while (texto.indexOf(letra, ++ultimoIndex) !== -1) {
    ultimoIndex = texto.indexOf(letra, ultimoIndex)
    contador++
  }

  return contador
}
