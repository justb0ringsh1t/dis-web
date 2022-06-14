function calcularDistancia(a, b) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2))
}

console.log(calcularDistancia([1234, 1], [1234, -4]))
console.log(calcularDistancia([0.5, -3], [-1.5, -3]))
