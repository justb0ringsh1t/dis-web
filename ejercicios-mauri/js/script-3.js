$(() => {
  const $resultado = $('#resultado');
  const $numero = $('#numero');

  $('#boton-mostrar').on('click', () => {
    if ($numero.val().replaceAll(' ', '').length === 0) {
      $resultado.html(`<span style="color:red">Ingrese algo</span>`);
      return;
    }

    const numero = Number($numero.val());

    let vector = [];
    for (let i = numero; i > 0; i--) {
      vector.push(i);
    }

    $resultado.html(`[${vector.join(',')}]`);
  });
});
