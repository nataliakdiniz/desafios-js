let endereco = {
  rua: 'Iracema Guedes',
  cidade: 'João Pessoa',
  cep: 58046135
}

function exibirEndereco(endereco) {
  for (let chave in endereco) {
    console.log(chave, endereco[chave])
  }
}
exibirEndereco(endereco)
