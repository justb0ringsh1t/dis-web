$(() => {
  const $resultado = $('#resultado');
  const $producto = $('#producto');

  const PRODUCTOS = [
    ['teclado', 200],
    ['mouse', 100],
    ['monitores', 300],
  ];

  $('#boton-mostrar').on('click', () => {
    if ($producto.val().replaceAll(' ', '').length === 0) {
      $resultado.html(`<span>Ingrese algo</span>`);
      return;
    }

    const productoSolicitado = $producto
      .val()
      .replaceAll(' ', '')
      .toLowerCase();
    let precio = `NO EXISTE ESE PRODUCTO`;

    for (const producto of PRODUCTOS) {
      const nombre = producto[0];
      if (productoSolicitado === nombre) {
        precio = producto[1];
        break;
      }
    }

    $resultado.html(precio);
  });
});
