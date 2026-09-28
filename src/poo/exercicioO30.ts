// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function exercicio30poo(): void{
    class Passagem {
        private _nome: string
        private _cpf: string
        protected _valorBase: number
        constructor(nome: string, cpf: string, valorBase: number){
            this._nome = nome
            this._cpf = cpf
            this._valorBase = valorBase
        }

        get getNome(): string{
            return this._nome
        }
        get getCpf(): string{
            return this._cpf
        }
        get getValor(): number{
            return this._valorBase
        }
        get getTipo(): string{
            return "Comum"
        }

        calcularValorFinal():number{
            return this._valorBase
        }
    }

    class PassagemComum extends Passagem{
        constructor(nome: string, cpf: string, valorBase: number){
            super(nome, cpf, valorBase)
        }
    }
    class PassagemEstudantil extends Passagem {
        constructor(nome: string, cpf: string, valorBase: number){
            super(nome, cpf, valorBase)
        }
        get getTipo(): string{
            return "Estudantil"
        }
        calcularValorFinal(): number {
            return this._valorBase * 0.5
        }
    }

    let executar: boolean = true
    let listaPassagem: Passagem[] = []
    let nome:string, cpf:string, valorBase: number
    while(executar){
        let tipo: number = Number(prompt("Tipo da Passagem:\n1 - Passagem Comum\n2 - Passagem Estudantil\n0 - Encerrar programa"))
        switch(tipo){
            case 1:
                nome = String(prompt("Nome:"))
                cpf = String(prompt("CPF: "))
                valorBase = Number(prompt("Valor base da passagem:"))

                if(!nome || nome.trim() === "" || cpf.trim() === "" || isNaN(valorBase) || valorBase <= 0){
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio")
                }
                else{
                    let comum = new PassagemComum(nome, cpf, valorBase)
                    listaPassagem.push(comum)
                }
                break
            case 2:
                nome = String(prompt("Nome:"))
                cpf = String(prompt("CPF: "))
                valorBase = Number(prompt("Valor base da passagem:"))

                if(!nome || nome.trim() === "" || cpf.trim() === "" || isNaN(valorBase) || valorBase <= 0){
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio")
                }
                else{
                    let estudantil = new PassagemEstudantil(nome, cpf, valorBase)
                    estudantil.calcularValorFinal()
                    listaPassagem.push(estudantil)
                }
                break
            case 0:
                alert("Encerrando programa...")
                executar = false
                break
            default:
                alert("Opção inválida")
                break
        }
    }

    alert("Abra o console")
    console.log(" === PASSAGENS VENDIDAS DO DIA === ")
    
    let faturamentoTotal = listaPassagem.reduce((total, passagem) => total + passagem.calcularValorFinal(), 0)

    console.log(`Faturamento Total do Dia: R$ ${faturamentoTotal.toFixed(2)}`)

    for(let passagem of listaPassagem){
        console.log(`Tipo: ${passagem.getTipo} | Nome: ${passagem.getNome} | CPF: ${passagem.getCpf} | Valor da passagem: ${passagem.getValor.toFixed(2)}`)
    }

}