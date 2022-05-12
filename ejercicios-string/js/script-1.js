$(function () {
  const parrafo = $('#resultado')

  $('#boton').on('click', function () {
    const texto = $('#texto').val()

    for (let i = texto.length - 1; i >= 0; i--) {
      parrafo.append(texto.charAt(i))
    }
  })
})
