const MESES_CON_31_DIAS = [
  'Enero',
  'Marzo',
  'Mayo',
  'Julio',
  'Agosto',
  'Octubre',
  'Diciembre',
]

$(() => {
  $('#boton').on('click', () => {
    const calendario = $('#calendario')
    const mes = $('#mes')[0].value
    const primerDia = $('#primerDia')[0].value

    calendario.html(crearCalendario(mes, primerDia))
  })
})

function crearCalendario(mes, primerDia) {
  const cantidadDias =
    mes === 'Febrero' ? 28 : MESES_CON_31_DIAS.includes(mes) ? 31 : 30
  const cabecera = crearCabecera(mes)

  let indicePrimerDia = diaAIndice(primerDia)

  let cuerpo = ''
  let diaActual = 1

  for (let i = 1; i <= 6; i++) {
    let semana = ''
    for (let j = 1; j <= 7; j++) {
      semana +=
        diaActual > cantidadDias || (i === 1 && j < indicePrimerDia)
          ? `<td> ? </td>`
          : `<td> ${diaActual++} </td>`
    }
    cuerpo += `<tr>${semana}</tr>`
  }

  return `
    ${cabecera}
    ${cuerpo}
  `
}

function crearCabecera(mes) {
  const filaMes = `
  <tr>
    <td colspan="7">${mes} 2022</td>
  <tr>
  `
  const filaDias = `
  <tr>
    <td>Lunes</td>
    <td>Martes</td>
    <td>Miercoles</td>
    <td>Jueves</td>
    <td>Viernes</td>
    <td>Sabado</td>
    <td>Domingo</td>
  </tr>
  `

  return `
    ${filaMes}
    ${filaDias}
  `
}

function diaAIndice(dia) {
  switch (dia) {
    case 'Lunes':
      return 1
    case 'Martes':
      return 2
    case 'Miercoles':
      return 3
    case 'Jueves':
      return 4
    case 'Viernes':
      return 5
    case 'Sabado':
      return 6
    case 'Domingo':
      return 7
  }
}
