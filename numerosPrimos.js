/*exibirNumerosPrimos(15)
function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    let ehPrimo = true

    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % 2 === 0) {
        ehPrimo = false
        break
      }
    }
    if (ehPrimo) console.log(numero)
  }
}
*/
// Começa com 2, pois quebremos ignorar o 1, e o proprio número, pois sao caract de primo.

//Refatorando e tornando um código mais limpo:
exibirNumerosPrimos(15)
function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    if (numeroPrimo(numero)) console.log(numero)
  }
}
function numeroPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % 2 === 0) {
      return false
    }
  }
  return true
}
