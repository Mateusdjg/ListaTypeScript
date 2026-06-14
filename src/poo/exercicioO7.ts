// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

class CadastrarFuncionario{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    aumento(percentual:number):void{
        let novo = (this.salario * percentual)/100
        this.salario += novo
        
    }

    exibir():void{
        console.log(`Nome: ${this.nome}\nNovo Salário: R$ ${this.salario}`)
    }
}

let nome = String(prompt("Nome do funcionário: "))
let cargo = String(prompt("Cargo do funcionário: "))
let salario = Number(prompt("Salário do funcionário: "))
let percentual = Number(prompt("Percentual de aumento: "))


let novoFuncionario = new CadastrarFuncionario(nome, cargo, salario)
novoFuncionario.aumento(percentual)
novoFuncionario.exibir()