$(function () {
  const $resultado = $('#resultado')
  const listaNumeros = []

  $('#boton').on('click', function () {
    const numero = Number($('#numero').val())
    listaNumeros.push(numero)

    const [menor, mayor] = buscarMayorMenor(listaNumeros)

    $resultado.html(`El menor es: ${menor} y el mayor es ${mayor}`)
  })

  function buscarMayorMenor(arr) {
    const arrSort = arr.sort()
    return [arrSort[0], arrSort[arrSort.length - 1]]
  }
})
