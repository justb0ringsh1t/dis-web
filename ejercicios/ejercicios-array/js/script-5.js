$(function () {
  const $resultado = $('#resultado')
  const $alias = $('#alias')

  const listaAlias = []

  $('#boton').on('click', function () {
    const alias = $alias.val()
    if (listaAlias.indexOf(alias) === -1) listaAlias.push(alias)
    $resultado.html(`Array de alias = [${listaAlias.join(',')}]<br>`)
  })
})
