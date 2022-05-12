$(function () {
  const parrafo = $('#resultado')

  $('#boton').on('click', function () {
    const texto = $('#texto').val()

    const VOCALES = ['a', 'e', 'i', 'o', 'u']
    let cantidadVocales = 0

    for (let i = 0; i < VOCALES.length; i++) {
      cantidadVocales += vecesLetra(texto, VOCALES[i])
    }

    parrafo.html(
      cantidadVocales === 0
        ? `<span class="error--text">No hay vocales</span>`
        : cantidadVocales
    )
  })
})

function vecesLetra(texto, letra) {
  let ultimoIndex = 0
  let contador = 0

  while (texto.indexOf(letra, ++ultimoIndex) !== -1) {
    ultimoIndex = texto.indexOf(letra, ultimoIndex)
    contador++
  }

  return contador
}
