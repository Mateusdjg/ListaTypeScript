// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros
// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento():number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.

export function exercicio40poo(): void {
    abstract class Investimento {
        private _valorAplicado: number
        private _tempoMeses: number

        constructor(valorAplicado: number, tempoMeses: number) {
            this._valorAplicado = valorAplicado
            this._tempoMeses = tempoMeses
        }

        get valorAplicado(): number {
            return this._valorAplicado
        }

        get tempoMeses(): number {
            return this._tempoMeses
        }

        abstract calcularRendimento(): number
    }

    class RendaFixa extends Investimento {
        constructor(valorAplicado: number, tempoMeses: number) {
            super(valorAplicado, tempoMeses)
        }

        calcularRendimento(): number {
            return this.valorAplicado * (0.008 * this.tempoMeses)
        }
    }

    class Acoes extends Investimento {
        private _taxaVariacao: number

        constructor(valorAplicado: number, tempoMeses: number, taxaVariacao: number) {
            super(valorAplicado, tempoMeses)
            this._taxaVariacao = taxaVariacao
        }

        get taxaVariacao(): number {
            return this._taxaVariacao
        }

        calcularRendimento(): number {
            return this.valorAplicado * ((this._taxaVariacao / 100) * this.tempoMeses)
        }
    }

    let listaSimulacoes: Investimento[] = []
    let executar: boolean = true, valorAplicado: number, tempoMeses: number, taxaVariacao: number

    while (executar) {
        let tipo = Number(prompt("=== SIMULADOR DE INVESTIMENTOS ===\nEscolha o tipo de aplicação:\n1 - Renda Fixa\n2 - Ações\n0 - Encerrar simulações"))

        switch (tipo) {
            case 1:
                valorAplicado = Number(prompt("Valor a ser aplicado [R$]:"))
                tempoMeses = Number(prompt("Tempo da aplicação [em meses]:"))

                if (isNaN(valorAplicado) || valorAplicado <= 0 || isNaN(tempoMeses) || tempoMeses <= 0) {
                    alert("Entrada inválida! Digite valores positivos.")
                } else {
                    let rendaFixa = new RendaFixa(valorAplicado, tempoMeses)
                    listaSimulacoes.push(rendaFixa)
                }
                break

            case 2:
                valorAplicado = Number(prompt("Valor a ser aplicado [R$]:"))
                tempoMeses = Number(prompt("Tempo da aplicação [em meses]:"))
                taxaVariacao = Number(prompt("Taxa de variação estimada por mês [%](ex: 1.5 ou -0.8):"))

                if (isNaN(valorAplicado) || valorAplicado <= 0 || isNaN(tempoMeses) || tempoMeses <= 0 || isNaN(taxaVariacao)) {
                    alert("Entrada inválida! Preencha os campos corretamente.")
                } else {
                    let acoes = new Acoes(valorAplicado, tempoMeses, taxaVariacao)
                    listaSimulacoes.push(acoes)
                }
                break

            case 0:
                alert("ENCERRANDO SIMULADOR...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    console.log(" ===== HISTÓRICO DE SIMULAÇÕES REALIZADAS =====")

    for (let i = 0; i < listaSimulacoes.length; i++) {
        let investimento = listaSimulacoes[i]
        let tipoTexto = investimento instanceof RendaFixa ? "Renda Fixa" : "Ações"

        console.log(`Simulação ${i + 1} [${tipoTexto}] | Aplicado: R$ ${investimento.valorAplicado.toFixed(2)} | Prazo: ${investimento.tempoMeses} meses | Lucro/Prejuízo: R$ ${investimento.calcularRendimento().toFixed(2)} | Saldo Final: R$ ${(investimento.valorAplicado + investimento.calcularRendimento()).toFixed(2)}`)
    }

    console.log(`\nTotal de simulações realizadas: ${listaSimulacoes.length}`)
}