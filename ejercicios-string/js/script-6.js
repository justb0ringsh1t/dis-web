$(function () {
  const $parrafo = $('#resultado')

  $('#boton').on('click', function () {
    const texto = $('#texto').val().toLowerCase()

    if (!texto) {
      $parrafo.html('')
      return
    }

    $parrafo.html(
      texto.charAt(0) === texto.charAt(texto.length - 1)
        ? `El texto empieza y termina con ${texto.charAt(0)}.`
        : `La primera letra y la ultima son diferentes.`
    )
  })
})
