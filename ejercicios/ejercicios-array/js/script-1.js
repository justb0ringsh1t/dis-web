$(function () {
  const $resultado = $('#resultado');
  const listaFrases = [];

  $('#boton').on('click', function () {
    const frase = $('#frase').val() + '';
    listaFrases.push(frase);

    const listaResultados = [];

    for (const frase_ of listaFrases) {
      listaResultados.push(frase_.length);
    }

    $resultado.html(listaResultados.join(','));
  });
});
