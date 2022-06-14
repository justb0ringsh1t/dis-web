$(() => {
  $('#boton').on('click', () => {
    const num1 = Number($('#num1').val());
    const num2 = Number($('#num2').val());
    const multiplo = Number($('#num3').val());
    const parrafo = $('#resultado');

    parrafo.html('');

    if (num1 === '' || num2 === '' || multiplo === '') {
      parrafo.html('Complete todos los campos');
      return;
    }

    if (multiplo === 0) {
      parrafo.html('Error, no hay multiplos de 0');
    }

    const menor = num1 <= num2 ? num1 : num2;
    const mayor = num2 >= num1 ? num2 : num1;

    for (let i = menor; i <= mayor; i++) {
      parrafo.append(`${i % multiplo === 0 ? i : ''} `);
    }
  });
});
