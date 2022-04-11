let faixas = [
  { tooltip: 'até R$700 reais', minino: 0, maximo: 700 },
  { tooltip: 'de R$700 a R$1.000 reais', minino: 700, maximo: 1000 },
  { tooltip: 'de R$1.000 ou mais', minino: 1000, maximo: 9999999 }
]
console.log(faixas)

//Segunda opção usando factory function
function faixaPreco(tooltip, minino, maximo) {
  return {
    tooltip,
    minino,
    maximo
  }
}
let faixas2 = [
  faixaPreco('a', 0, 700),
  faixaPreco('b', 700, 1000),
  faixaPreco('c', 1000, 9999999)
]
console.log(faixas2)

//Terceira opção usando Constructor Function
function maisUmaFaixaDePreco(tooltip, minino, maximo) {
  this.tooltip = tooltip
  this.minino = minino
  this.maximo = maximo
}
let faixas3 = [
  new maisUmaFaixaDePreco('d', 0, 700),
  new maisUmaFaixaDePreco('e', 700, 1000),
  new maisUmaFaixaDePreco('f', 1000, 9999999)
]
console.log(faixas3)
