$(function () {
  const $resultado = $('#resultado')
  const listaNumeros = []

  $('#boton-agregar').on('click', function () {
    const numero = Number($('#numero').val())
    listaNumeros.push(numero)
  })

  $('#boton-calcular').on('click', function () {
    let pares = 0,
      imparesMayores100 = 0,
      cantidadMayores100 = 0,
      promedio = 0

    for (const numero of listaNumeros) {
      if (numero > 100) {
        cantidadMayores100++
        imparesMayores100 += numero % 2 !== 0 ? numero : 0
      }
      pares += numero % 2 === 0 ? 1 : 0
      promedio += numero
    }
    promedio /= listaNumeros.length

    $resultado.html(`
    <ul>
      <li>Pares: ${pares}</li>
      <li>Cantidad mayores a 100: ${cantidadMayores100}</li>
      <li>Suma impares mayores a 100: ${imparesMayores100}</li>
      <li>Promedio: ${promedio}</li>
    </ul>
    `)
  })
})
