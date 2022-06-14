$(() => {
  const $resultado = $('#resultado')
  const $oracion = $('#oracion')

  $('#boton-mostrar').on('click', () => {
    if ($oracion.val().replaceAll(' ', '').length === 0) {
      $resultado.html(`<span>Ingrese algo</span>`)
      return
    }

    const oracion = $oracion.val().replaceAll(' ', '').toLowerCase()
    const oracionReversa = oracion.split('').reverse().join('')

    $resultado.html(
      `${oracion === oracionReversa ? 'Es palindromo' : 'No es palindromo'}`
    )
  })
})
