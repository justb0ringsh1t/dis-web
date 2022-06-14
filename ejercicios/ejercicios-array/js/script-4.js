$(function () {
  const $resultado = $('#resultado');
  const $numero = $('#numero');

  const listaNumeros = [];

  $('#boton').on('click', function () {
    const numero = Number($numero.val());
    listaNumeros.push(numero);

    const listaFinal = mayoresA20(listaNumeros);

    $resultado.html(`Array completo = [${listaNumeros.join(',')}]<br>`);
    $resultado.append(`Array mayores a 20 = [${listaFinal.join(',')}]`);
  });

  function mayoresA20(numeros) {
    const numerosMayores20 = [];

    for (const numero of numeros)
      if (numero > 20) numerosMayores20.push(numero);
    return numerosMayores20;
  }
});
