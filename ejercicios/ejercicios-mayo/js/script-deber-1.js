$(() => {
  $('#boton').on('click', () => {
    const calendario = $('#calendario');
    const mes = $('#mes')[0].value;
    const primerDia = $('#primerDia')[0].value;

    const cabecera = crearCabecera(mes);
    const cuerpo = crearCuerpo(mes, primerDia);

    calendario.html(`${cabecera}${cuerpo}`);
  });
});

const MESES_CON_31_DIAS = [
  'Enero',
  'Marzo',
  'Mayo',
  'Julio',
  'Agosto',
  'Octubre',
  'Diciembre',
];

function crearCabecera(mes) {
  const filaMes = `
  <tr class="mes">
    <td colspan="7">${mes} 2022</td>
  <tr>
  `;
  const filaDias = `
  <tr class="dias-semana">
    <td>Lu</td>
    <td>Ma</td>
    <td>Mi</td>
    <td>Ju</td>
    <td>Vi</td>
    <td>Sa</td>
    <td>Do</td>
  </tr>
  `;

  return `
    ${filaMes}
    ${filaDias}
  `;
}

function crearCuerpo(mes, primerDia) {
  const cantidadDias =
    mes === 'Febrero' ? 28 : MESES_CON_31_DIAS.includes(mes) ? 31 : 30;

  let cuerpo = '';
  let diaActual = 1;

  for (let i = 1; i <= 6; i++) {
    let semana = '';
    for (let j = 1; j <= 7; j++) {
      semana +=
        diaActual > cantidadDias || (i === 1 && j < primerDia) ?
          `<td class="sin-dia"> ? </td>` :
          `<td class="dia-mes"> ${diaActual++} </td>`;
    }
    cuerpo += `<tr class="dias">${semana}</tr>`;
  }

  return cuerpo;
}
