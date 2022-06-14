$(() => {
  const $resultado = $('#resultado');
  const $numero = $('#numero');

  $('#boton-mostrar').on('click', () => {
    if ($numero.val().replaceAll('', ' ').length === 0) {
      $resultado.html(`<span>Ingrese algo</span>`);
      return;
    }

    const numero = Number($numero.val());
    const divisiores = [];

    for (let i = 1; i <= Math.floor(numero / 2); i++) {
      if (numero % i === 0) divisiores.push(i);
    }
    divisiores.push(numero);

    $resultado.html(`[${divisiores.join(',')}]`);
  });
});
