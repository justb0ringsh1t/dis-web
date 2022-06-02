$(function () {
  // inputs
  const $nombre = $('#nombre');
  const $contra = $('#contra');
  const $saldo = $('#saldo');

  // outputs
  const $error = $('#error');
  const $mayoresSaldos = $('#mayoresSaldos');
  const $sinSaldo = $('#sinSaldo');
  const $usuarios = $('#usuarios');

  // listas
  const usuarios = [];

  $('#boton').on('click', function () {
    $error.html(``);

    $mayoresSaldos.html(``);
    $sinSaldo.html(``);
    $usuarios.html(``);

    const nombre = $nombre.val();
    const contra = $contra.val();
    const saldo = Number($saldo.val());

    if (!nombreValido(nombre)) {
      $error.html(`El nombre no es valido`);
      return;
    }
    if (!contraValida(contra)) {
      $error.html(`La contraseña no es valida`);
      return;
    }
    if (!saldoValido(saldo)) {
      $error.html(`El saldo no es valido`);
      return;
    }

    const usuario = new Usuario(nombre, contra, saldo);
    usuarios.push(usuario);

    if (usuarios.length < 2) return;

    const usuariosPorSueldo = [...usuarios].sort((a, b) => b.saldo - a.saldo);

    const usuariosSinSueldo = [];
    for (let i = 0; i < usuarios.length; i++)
      if (usuarios[i].saldo === 0) usuariosSinSueldo.push(usuarios[i]);

    // mostrar
    for (let i = 0; i < usuariosPorSueldo.length; i++) {
      const usuario = usuariosPorSueldo[i];
      $mayoresSaldos.append(`<li>Usuario[nombre=${usuario.nombre}]</li>`);
    }

    for (let i = 0; i < usuariosSinSueldo.length; i++) {
      const usuario = usuariosSinSueldo[i];
      $sinSaldo.append(`<li>Usuario[nombre=${usuario.nombre}]</li>`);
    }

    for (let i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];
      $usuarios.append(`<li>${usuario.mostrarInfo()}</li>`);
    }
  });

  // validaciones
  function nombreValido(nombre) {
    if (nombre.length === 0) return false;
    for (const usuario of usuarios) if (usuario.nombre === nombre) return false;
    return true;
  }
  function contraValida(contra) {
    return (
      contra.length > 0 && contra.match(/[A-Z]/g) && contra.match(/[0-9]/g)
    );
  }
  function saldoValido(saldo) {
    return saldo >= 0;
  }

  // objetos
  function Usuario(_nombre, _contra, _saldo) {
    this.nombre = _nombre;
    this.contra = _contra;
    this.saldo = _saldo;

    this.mostrarInfo = function () {
      return `Usuario[nombre=${this.nombre}, contraseña=${this.contra}, saldo=$${this.saldo}]`;
    };
  }
});
