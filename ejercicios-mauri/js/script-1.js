'use strict';

$(() => {
  const $resultado = $('#resultado');
  const $enteros = $('#enteros');

  $('#boton-mostrar').on('click', () => {
    if ($enteros.val().replaceAll(' ', '').length === 0) {
      $resultado.html('<span style="color:red">Ingrese algo</span>');
      return;
    }

    const arrayEnteros = $enteros.val().split(',');
    const arrayOrdenado = arrayEnteros.sort();

    const mayor = arrayOrdenado[arrayOrdenado.length - 1];
    const menor = arrayOrdenado[0];

    let suma = 0;
    arrayEnteros.forEach((a) => (suma += Number(a)));
    const promedio = suma / arrayOrdenado.length;

    $resultado.html(
      `<ul>
        <li>Menor: ${menor}</li>
        <li>Mayor: ${mayor}</li>
        <li>Promedio: ${promedio}</li>
      </ul>`
    );
  });
});
