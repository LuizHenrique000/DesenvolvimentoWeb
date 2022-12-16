let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // má prática
console.log(!!produto.preco)
console.log(produto)

produto.preco = null