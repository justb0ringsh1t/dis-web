$(function () {
  const parrafo = $('#resultado')

  $('#boton').on('click', function () {
    const texto = $('#texto').val()
    parrafo.html(texto.toLowerCase())
  })
})
