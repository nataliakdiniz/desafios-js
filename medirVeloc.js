verificarVelocidade(80)
function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70
  const kmPorPonto = 5

  if (velocidade <= velocidadeMaxima) {
    console.log('Velocidade Permitida!')
  } else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
    if (pontos >= 12) {
      console.log('Carteira Suspensa!')
    } else {
      console.log(pontos, 'Pontos')
    }
  }
}
