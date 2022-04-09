$(() => {
  $('#tarjeta').on('change', () =>
    $('#containerMetodoTarjeta').toggleClass('invisible')
  )

  $('#btn-calcular').on('click', () => {
    const tarjeta = $('#tarjeta')[0].checked
    const monto = Number($('#pago').val())
    const aplicaDescuento = tarjeta && monto < 10000
    const costoFinal = aplicaDescuento ? monto - (monto * 4) / 100 : monto

    $('#resultado').html(`$ ${costoFinal}`)
  })
})
