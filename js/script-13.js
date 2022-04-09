$('document').ready(() => {
  $('#btn-calcular').on('click', () => {
    const asignatura = $('#asignatura').val()
    const oral = Number($('#oral').val())
    const practico = Number($('#practico').val())
    const escrito = Number($('#escrito').val())

    const promedio = Math.round((oral + practico + escrito) / 3)

    let juicio
    let parrafoCorrespondiente

    if (promedio < 4) {
      juicio = 'Examen Febrero'
      parrafoCorrespondiente = '#febrero'
    } else if (promedio >= 4 && promedio < 8) {
      juicio = 'Examen Diciembre'
      parrafoCorrespondiente = '#diciembre'
    } else {
      juicio = 'Exonerado'
      parrafoCorrespondiente = '#exonero'
    }

    $(parrafoCorrespondiente).append(
      `${asignatura} ${promedio} ${juicio} <br />`
    )
  })
})
