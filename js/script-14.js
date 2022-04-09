$('document').ready(() => {
  $('#btnmostrar').on('click', () => {
    const inputMillas = $('#millas')
    inputMillas.removeClass('error')

    if (inputMillas.val() === '') {
      inputMillas.addClass('error')
      inputMillas.focus()
      inputMillas.html('')
      return
    }

    const planPlus = $('#planSi')[0].checked
    const millas = planPlus
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
