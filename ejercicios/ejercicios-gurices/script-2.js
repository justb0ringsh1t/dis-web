function contarValorMayor(a) {
  const b = a.sort((a, b) => b - a)
  return b.lastIndexOf(b[0]) + 1
}

contarValorMayor([4, 3, 2, 5, 5, 1])
