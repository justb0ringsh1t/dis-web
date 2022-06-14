$(function () {
  const $error = $('#error')
  const $exonerados = $('#exonerados')
  const $reprobados = $('#reprobados')
  const $cedula = $('#cedula')
  const $nota = $('#nota')

  const libreta = []

  $('#boton').on('click', function () {
    if (
      $cedula.val().replaceAll(' ', '').length === 0 ||
      $nota.val().replaceAll(' ', '').length === 0
    ) {
      $error.html(`Ingrese los 2 valores`)
      return
    }
    $error.html(``)

    const cedula = $cedula.val()
    const nota = Number($nota.val())

    libreta.push(cedula, nota)

    const exonerados = []
    const reprobados = []

    for (let i = 0; i < libreta.length; i += 2) {
      const cedula = libreta[i]
      const nota = libreta[i + 1]

      if (nota >= 8) exonerados.push(cedula, nota)
      else reprobados.push(cedula, nota, definirPeriodo(nota))
    }

    $exonerados.html(``)
    for (let i = 0; i < exonerados.length; i += 2) {
      const cedula = exonerados[i]
      const nota = exonerados[i + 1]

      $exonerados.append(`
      <ul>
        <li><h4>CI: ${cedula}</h4></li>
        <ul>
          <li>Nota: ${nota}</li>
        </ul>
      </ul>
      `)
    }

    $reprobados.html(``)
    for (let i = 0; i < reprobados.length; i += 3) {
      const cedula = reprobados[i]
      const nota = reprobados[i + 1]
      const juicio = reprobados[i + 2]

      $reprobados.append(`
      <ul>
        <li><h4>CI: ${cedula}</h4></li>
        <ul>
          <li>Nota: ${nota}</li>
          <li>Juicio: ${juicio}</li>
        </ul>
      </ul>
      `)
    }
  })

  function definirPeriodo(nota) {
    return nota >= 4 ? 'Diciembre' : 'Febrero'
  }
})
