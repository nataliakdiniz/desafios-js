const mensagem = new String('Meu pai')

console.log({
  typeOfMessage: typeof mensagem,
  index2: mensagem[2],
  hasMenu: mensagem.includes('Meu'),
  hasMae: mensagem.includes('Mae'),
  startsWithPai: mensagem.startsWith('pai'), // Inicia com essa palavra?
  hasPai: mensagem.indexOf('pai'),
  replace: mensagem.replace('Meu', 'Teu') // Metodo para substituir a string.
})
