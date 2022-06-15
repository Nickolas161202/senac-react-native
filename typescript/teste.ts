var number:number
number = 50

var frutas:string[] = ['frutas', 'maçã']
frutas.push('banana')
console.log(frutas);

var diaSemana: (string | number)[] = []
diaSemana.push('segunda')
diaSemana.push(3)
console.log(diaSemana)


var opcoes:(string | number | boolean)[] = []
opcoes.push('ok')
opcoes.push(1)
opcoes.push(true)
console.log(opcoes)


var boletim:[string,number]
boletim = ['jose', 7.5]
console.log(boletim);

var notas: ([string,number])[] = []
notas.push(['ana', 10])
console.log(notas)

enum Epessoa{
    FISICA,
    JURIDICA = 2
}

var cliente:Epessoa
cliente = Epessoa.FISICA
console.log(cliente)

var senac:Epessoa;
senac = Epessoa.JURIDICA
