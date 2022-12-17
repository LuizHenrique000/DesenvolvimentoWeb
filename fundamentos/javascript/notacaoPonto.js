console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Esponja'
obj1['nome'] = 'Bob'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome;
    this.exec = () => {
        console.log('Exec....')
    }
}

const Obj2 = new Obj('Bob Esponja')
const Obj3 = new Obj('Lula Molusco')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj2.exec()