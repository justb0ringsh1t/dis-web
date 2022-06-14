$(() => {
  const $resultado = $('#resultado')
  const $vector = $('#vector')

  $('#boton-mostrar').on('click', () => {
    if ($vector.val().replaceAll(' ', '').length === 0) {
      $resultado.html(`<span>Ingrese algo</span>`)
      return
    }

    const vector = $vector.val().split(',').sort()
    const vectorRepetidos = []
    let ultimoRepetido = vector[0]

    for (let i = 1; i <= vector.length; i++) {
      if (vector[i] === vector[i - 1]) {
        vectorRepetidos.push(vector[i - 1])
        ultimoRepetido = vector[i - 1]
      } else if (vector[i] !== ultimoRepetido && ultimoRepetido !== undefined) {
        vectorRepetidos.push(ultimoRepetido)
        ultimoRepetido = undefined
      }
    }

    $resultado.html(`[${vectorRepetidos.join(',')}]`)
  })
})
