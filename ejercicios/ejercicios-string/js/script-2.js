$(function () {
  const $parrafo = $('#resultado')

  $('#boton').on('click', function () {
    const texto = $('#texto').val()
    const letra = $('#letra').val()

    if (!letra || !texto) {
      $parrafo.html('')
      return
    }

    if (texto.indexOf(letra) === -1) {
      $parrafo.html(`${letra} no se encuentra en el texto.`)
      return
    }

    let ultimoIndex = 0
    let contador = 0

    while (texto.indexOf(letra, ++ultimoIndex) !== -1) {
      ultimoIndex = texto.indexOf(letra, ultimoIndex)
      contador++
    }

    $parrafo.html(contador)
  })
})
