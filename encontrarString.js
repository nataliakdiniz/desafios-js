// Ler propriedades dentro de um objeto:
const filme = {
  titulo: 'Batman',
  ano: 2020,
  diretor: 'Robin',
  personagem: 'Batman'
}
exibirPropriedades(filme)
function exibirPropriedades(objeto) {
  for (prop in objeto)
    if (typeof objeto[prop] === 'string') console.log(prop, objeto[prop])
}
