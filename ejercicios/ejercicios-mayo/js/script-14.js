$('document').ready(() => {
  $('#btn-calcular').on('click', () => {
    const inputMillas = $('#millas')
    inputMillas.removeClass('input--error')

    if (inputMillas.val() == '') {
      inputMillas.addClass('input--error')
      inputMillas.focus()
      return
    }

    const plus = $('#plus')[0].checked
    const millas = plus
      ? Number(inputMillas.val()) * 2
      : Number(inputMillas.val())
    const plan =
      millas < 15000
        ? 'No dispone de millas suficientes para ningun plan. '
        : millas >= 1500 && millas < 30000
        ? 'América del Sur (destino cercano).'
        : millas >= 30000 && millas < 60000
        ? 'América del Norte (destino intermedio).'
        : 'Europa (destino lejano).'

    $('#resultado').html(plan)
  })
})
