function Endereco(rua, cidade, cep) {
  this.rua = rua
  this.cidade = cidade
  this.cep = cep
}
const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')
const endereco3 = endereco2

function SaoIguais(endereco1, endereco2) {
  return (
    endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco2.cep === endereco2.cep
  )
}
console.log(SaoIguais(endereco1, endereco2))

function TemEnderecoMemoriaIguais(endereco1, endereco2) {
  return endereco1 === endereco2
}
console.log(TemEnderecoMemoriaIguais(endereco1, endereco2))

function TemEnderecoMemoriaIguais(endereco2, endereco3) {
  return endereco2 === endereco3
}
console.log(TemEnderecoMemoriaIguais(endereco2, endereco3))

//Temos na primeira função uma comparação de propriedades de objetos, e na segunda e terceira função temos uma comparação de endereço memória, onde está os elementos na memoria.
