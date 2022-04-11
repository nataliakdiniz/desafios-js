const celular = {
  marca: 'Apple',
  especificacoes: {
    tela: {
      vertical: 1234,
      horizontal: 1234
    },
    bateria: {
      capacidade: 8500
    }
  },
  ligar: function () {
    console.log('ligando celular...')
  }
}

/* function criarCelular() {
  return {
    marca: 'Apple',                    //Código não está dinâmico.
    especificacoes: {
      tela: {
        vertical: 1234,
        horizontal: 1234
      },
      bateria: {
        capacidade: 8500
      }
    }
  }
} */
function criarCelular(marca, telaVertical, telaHorizontal, bateriaCapacidade) {
  return {
    marca, //Código está dinâmico.
    especificacoes: {
      tela: {
        vertical: telaVertical,
        horizontal: telaHorizontal
      },
      bateria: {
        capacidade: bateriaCapacidade
      }
    },
    ligar() {
      console.log('ligando celular...')
    }
  }
}
const celular1 = criarCelular('apple', 125, 167, 5000)
console.log('celular1', celular1)
// Objeto dinâmico!
