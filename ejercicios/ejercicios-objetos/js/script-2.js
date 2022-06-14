$(function() {
  // inputs
  const $nombre = $('#nombre');
  const $imagen = $('#imagen');

  // outputs
  const $resultado = $('#resultado');

  // listas
  const listaUsuarios = [];

  $('#boton').on('click', function() {
    const nombre = $nombre.val();
    const ruta = $imagen.val();
    const rutaFinal = `img/${ruta.substr(ruta.lastIndexOf('\\') + 1)}`;

    const usuario = new Usuario(nombre, rutaFinal);
    listaUsuarios.push(usuario);

    $resultado.html(`<tr><th>Código</th><th>Nombre</th><th>Foto</th></tr>`);
    for (const usuario of listaUsuarios) {
      $resultado.append(usuario.render());
    }
  });

  // objetos
  function Usuario(_nombre, _ruta) {
    this.codigo = listaUsuarios.length + 1;
    this.nombre = _nombre;
    this.ruta = _ruta;

    this.render = function() {
      return `
      <tr>
        <td>#${this.codigo}</td>
        <td>${this.nombre}</td>
        <td>
          <img src="${this.ruta}" />
        </td>
      </tr>`;
    };
  }
});
