// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

export function exercicio26poo(): void {
    class Conta {
        nome: string
        protected _saldo: number = 0

        constructor(nome: string) {
            this.nome = nome
        }

        get getSaldo(): number {
            return this._saldo
        }

        depositar(deposito: number): void {
            if (deposito > 0) {
                this._saldo += deposito
            }
        }

        saque(saque: number): boolean {
            if (saque > 0 && this._saldo >= saque) {
                this._saldo -= saque
                return true
            }
            return false
        }
    }

    class ContaCorrente extends Conta {
        constructor(nome: string) {
            super(nome)
        }

        saque(saque: number): boolean {
            const saqueComTaxa = saque + 2;

            if (saque > 0 && this._saldo >= saqueComTaxa) {
                this._saldo -= saqueComTaxa;
                return true
            }
            return false
        }
    }

    class ContaPoupanca extends Conta {
        constructor(nome: string) {
            super(nome)
        }

        rendimento(): void {
            if (this._saldo > 0) {
                this._saldo += this._saldo * 0.01
            }
        }
    }

    let executa: boolean = true
    let nome: string, deposito: number, saque: number

    let tipo: number = Number(prompt("Tipo da conta:\n1 - Conta Corrente\n2 - Conta Poupança"))

    if (tipo === 1) {
        nome = String(prompt("Nome do titular:"))
        let contaCorrente = new ContaCorrente(nome)
        while (executa) {
            let menu: number = Number(prompt(" ==== MENU ==== \n1 - Depósito\n2 - Saque\n3 - Ver saldo\n0 - sair"))
            switch (menu) {
                case 1:
                    deposito = Number(prompt("Valor a depósitar:"))
                    contaCorrente.depositar(deposito)
                    alert("Depósito concluído")
                    break
                case 2:
                    saque = Number(prompt("Valor de saque:"))
                    if(contaCorrente.saque(saque)){
                        alert("Saque concluído")
                    } else{
                        alert("Falha no saque: Saldo insuficiente!")
                    }
                    break
                case 3:
                    alert(`Saldo: R$ ${contaCorrente.getSaldo}`)
                    break
                case 0:
                    alert("Encerrando programa...")
                    executa = false
                    break
                default:
                    alert("Opção inválida!")
                    break
            }
        }
    }
    else if (tipo === 2) {
        nome = String(prompt("Nome do titular:"))
        let contaPoupanca = new ContaPoupanca(nome)
        while (executa) {
            let menu: number = Number(prompt(" ==== MENU ==== \n1 - Depósito\n2 - Saque\n3 - Aplicar Rendimento\n4 - Ver saldo\n0 - sair"))
            switch (menu) {
                case 1:
                    deposito = Number(prompt("Valor a depósitar:"))
                    contaPoupanca.depositar(deposito)
                    alert("Depósito concluído")
                    break
                case 2:
                    saque = Number(prompt("Valor de saque:"))
                    if(contaPoupanca.saque(saque)){
                        alert("Saque concluído")
                    } else{
                        alert("Falha no saque: Saldo insuficiente!")
                    }
                    break
                case 3:
                    contaPoupanca.rendimento()
                    alert(`Operação realizada com sucesso! Saldo atual: R$ ${contaPoupanca.getSaldo.toFixed(2)}.`)
                    break
                case 4:
                    alert(`Saldo: R$ ${contaPoupanca.getSaldo.toFixed(2)}`)
                    break
                case 0:
                    alert("Encerrando programa...")
                    executa = false
                    break
                default:
                    alert("Opção inválida!")
                    break
            }
        }
    }
    else{
        alert("Tipo de conta inválida! Encerrando programa")
    }

}