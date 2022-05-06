let amigo = {nome: 'Vicente',
Sexo: 'M',
Peso: 79.5,
engordar(p=0){
    console.log('Engordou')
    this.Peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.Peso}kg`)