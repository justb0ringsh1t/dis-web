$(() => {
  const $resultado = $('#resultado')
  const $numero = $('#numero')

  $('#boton-mostrar').on('click', () => {
    if ($numero.val().replaceAll(' ', '').length === 0) {
      $resultado.html(`<span>Ingrese algo</span>`)
      return
    }

    const numero = Number($numero.val())

    const vector = []
    for (let i = numero; i > 0; i--) {
      vector.push(i)
    }

    $resultado.html(`[${vector.join(',')}]`)
  })
})
