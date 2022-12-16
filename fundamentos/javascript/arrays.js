const valores = [7.7, 8.9, 6.3, 9.2]

function imprimirValores() {
    console.log(valores)
}

console.log(valores[0], valores[3])
console.log(valores[4])

valores[20] = 10;
imprimirValores()
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste')
imprimirValores()

valores.pop()
imprimirValores()

delete valores[0]
imprimirValores()