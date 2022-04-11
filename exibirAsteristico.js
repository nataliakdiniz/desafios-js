//Loop nestder/interior/ nestado:
exibirAsteristicos(10)
// loop que vai interar a cada linha, e soma 1 asteristico.
function exibirAsteristicos(linhas) {
  for (let linha = 1; linha <= linhas; linha++) {
    let padrao = ''
    for (let i = 0; i < linha; i++) {
      //enquanto a linha for '3' o loop exterior e interior vai rodar 3x
      padrao += '*'
    }
    console.log(padrao)
  }
}
