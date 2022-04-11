const celular = {
  marca: 'Apple',
  especificacoes: {
    tela: {
      vertical: 1234,
      horizontal: 1234
    }
  },
  ligar: function () {
    console.log('ligando celular...')
  }
}

const novoObjeto = Object.assign(
  {
    bateria: 5000 //Além de pegar as prop anteriores posso adicionar prop.
  },
  celular
)
console.log(novoObjeto)

//Também posso fazer assim:
/*
const novoObjeto = { ...celular }
console.log(novoObjeto)
*/
