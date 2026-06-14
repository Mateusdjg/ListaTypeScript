// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

class Funcionario{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    exibir():void{
        console.log(`Nome: ${this.nome}\nCargo: ${this.cargo}\nSalário: R$ ${this.salario}`)
    }
}

let listaFuncionarios: Funcionario[] = []

let op = 0
while(op != 2){
    let nome = String(prompt("Nome do funcionário: "))
    let cargo = String(prompt("Cargo do funcionário: "))
    let salario = Number(prompt("Salário do funcionário: "))

    let novoFuncionario = new Funcionario(nome, cargo, salario)
    listaFuncionarios.push(novoFuncionario)

    op = Number(prompt("Deseja continuar?\n1. SIM\n2. NÃO\n Escolha: "))
}

for(let i = 0; i<listaFuncionarios.length; i++){
    listaFuncionarios[i].exibir()
}