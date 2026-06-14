// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

class ContaCorrente {
    numeroConta:number
    nomeCorrentista:string
    saldo:number

    constructor(numeroConta:number, nomeCorrentista:string, saldo:number = 0){
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
            return
        }
        if(sacar > this.saldo){
            alert("O valor do saque não pode ser maior do que o saldo atual.")
            return
        }

        this.saldo -= sacar
    }

    exibirDados():void{
        alert(`Conta: ${this.numeroConta}\nNome: ${this.nomeCorrentista}\nSaldo: R$ ${this.saldo}`)
    }
}

let numConta = Number(prompt("Informe o número da conta: "))
let nome = String(prompt("Informe seu nome: "))

let novaConta = new ContaCorrente(numConta,nome)

let menu:number = 0
while(menu != 4){
    menu = Number(prompt("====== MENU DE ALTERAÇÕES ======\n1-Mudar Nome\n2-Depositar\n3-Sacar\n4-Sair\nEscolha: "))
    switch (menu){
        case 1:
            let novoNome = String(prompt("Infrome o novo nome: "))
            novaConta.mudarNome(novoNome)
            break
        case 2:
            let depositar = Number(prompt("Valor a depósitar: "))
            novaConta.depositarDinheiro(depositar)
            break
        case 3:
            let sacar = Number(prompt("Valor do saque: "))
            novaConta.sacarDinheiro(sacar)
            break
        case 4:
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida.")
    }
}
novaConta.exibirDados()