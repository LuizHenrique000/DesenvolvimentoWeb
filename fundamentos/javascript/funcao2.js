// Armazenando uma função
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(1, 5))

const imprimir2 = a => console.log(a)
imprimir2("Nice")