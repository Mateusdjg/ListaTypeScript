// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

class ContaCorrente {
    numeroConta:number
    nomeCorrentista:string
    saldo:number

    constructor(numeroConta:number, nomeCorrentista:string, saldo:number){
        this.numeroConta = numeroConta
        this.nomeCorrentista = nomeCorrentista
        this.saldo = saldo
    }

    mudarNome(novoNome:string):void{
        this.nomeCorrentista = novoNome
    }

    depositarDinheiro(depositar:number):void{
        this.saldo += depositar
    }

    sacarDinheiro(sacar:number):void{
        if(sacar <= 0){
            alert("O valor não pode ser negativo ou zero")
        }
        if(sacar > this.saldo){
            alert("O valor do saque não pode ser maior do que o saldo atual.")
        }

        this.saldo -= sacar
    }
}

let numConta = Number(prompt("Informe o número da conta: "))
let nome = String(prompt("Informe seu nome: "))
let op = Number(prompt("Deseja colocar um valor inicial?\n1. Sim\n2. Não\nEscolha: "))
let valorInicial:number
if(op == 1){
    valorInicial = Number(prompt("Informe o valor a ser depositado: "))
}
else{
    valorInicial = 0
}

let opc = Number(prompt("Deseja fazer alguma alteração[1.sim |  2.não]?"))
let menu:number
if(opc == 1){
    menu = 0
}
while(menu != 4){
    let opc = Number(prompt("====== MENU DE ALTERAÇÕES ======\n1-Mudar Nome\n 2-Depositar\n3-Sacar\n4-Sair\nEscolha: "))
}
