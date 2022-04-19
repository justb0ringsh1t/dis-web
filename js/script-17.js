$(() => {
  $('#tarjeta').on('change', () =>
    $('#metodoTarjetaContainer').toggleClass('invisible')
  )

  $('#btn-calcular').on('click', () => {
    $('#pago').removeClass('input--error')
    const monto = Number($('#pago').val())

    if (monto == 0) {
      $('#pago').addClass('input--error')
      $('#pago').focus()
      return
    }

    const tarjeta = $('#tarjeta')[0].checked
    const aplicaDescuento = tarjeta && monto < 10000
    const costoFinal = aplicaDescuento ? monto - (monto * 4) / 100 : monto

    $('#resultado').html(`$ ${costoFinal}`)
  })
})
