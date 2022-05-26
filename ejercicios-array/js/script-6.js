$(function () {
  const $resultado = $('#resultado');
  const $texto = $('#texto');

  const listaTextos = [];

  $('#boton').on('click', function () {
    const texto = $texto.val();
    listaTextos.push(texto);

    const listaFinal = quitarRepetidos(listaTextos);

    $resultado.html(`Array sin repetidos = [${listaFinal.join(',')}]`);
  });

  function quitarRepetidos(array) {
    const arrayOrdenado = array.sort();
    const arrayFinal = [];

    for (let i = 0; i < arrayOrdenado.length; i++) {
      const elemento = arrayOrdenado[i];
      const elementoProx = arrayOrdenado[i + 1];
      if (elemento !== elementoProx) arrayFinal.push(elemento);
    }

    return arrayFinal;
  }
});
