'use strict';

$(() => {
  const $resultado = $('#resultado');
  const $vectorA = $('#vectorA');
  const $vectorB = $('#vectorB');

  $('#boton-mostrar').on('click', () => {
    if (
      $vectorA.val().replaceAll(' ', '').length === 0 ||
      $vectorB.val().replaceAll(' ', '').length === 0
    ) {
      $resultado.html('<span>Complete todos los campos</span>');
      return;
    }

    const vectorA = $vectorA.val().split(',');
    const vectorB = $vectorB.val().split(',');

    if (vectorA.length !== vectorB.length) {
      $resultado.html(
        '<span >Los Vectores tienen que tener el mismo tamaño</span>'
      );
      return;
    }

    let vectorAB = [];
    let ia = 0;
    let ib = 0;

    for (let i = 0; i < vectorA.length * 2; i++) {
      vectorAB.push(ia <= ib ? vectorA[ia++] : vectorB[ib++]);
    }

    $resultado.html(
      `<ul>
        <li>Vector A: [${vectorA.join(',')}]</li>
        <li>Vector B: [${vectorB.join(',')}]</li>
        <li>Resultado: [${vectorAB.join(',')}]</li>
      <ul>`
    );
  });
});
