// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function exercicio37poo(): void {
    abstract class Consumidor {
        private _numeroConta: string
        private _kwhConsumidos: number

        constructor(numeroConta: string, kwhConsumidos: number) {
            this._numeroConta = numeroConta
            this._kwhConsumidos = kwhConsumidos
        }

        get numeroConta(): string {
            return this._numeroConta
        }

        get kwhConsumidos(): number {
            return this._kwhConsumidos
        }

        abstract calcularValorFatura(): number
    }

    class ConsumidorResidencial extends Consumidor {
        constructor(numeroConta: string, kwhConsumidos: number) {
            super(numeroConta, kwhConsumidos)
        }

        calcularValorFatura(): number {
            return this.kwhConsumidos * 0.75
        }
    }

    class ConsumidorComercial extends Consumidor {
        constructor(numeroConta: string, kwhConsumidos: number) {
            super(numeroConta, kwhConsumidos)
        }

        calcularValorFatura(): number {
            if (this.kwhConsumidos <= 1000) {
                return this.kwhConsumidos * 0.60
            } else {
                let valorBase = 1000 * 0.60
                let excedente = (this.kwhConsumidos - 1000) * 0.50
                return valorBase + excedente
            }
        }
    }

    let listaConsumidores: Consumidor[] = []
    let executar: boolean = true, numeroConta: string, kwhConsumidos: number

    while (executar) {
        let tipo = Number(prompt("=== SISTEMA DE ENERGIA ELÉTRICA ===\nTipo de Consumidor:\n1 - Residencial [R$ 0,75/kWh]\n2 - Comercial [R$ 0,60 até 1000kWh | R$ 0,50 excedente]\n0 - Encerrar cadastros"))

        switch (tipo) {
            case 1:
                numeroConta = String(prompt("Número da conta do consumidor:"))
                kwhConsumidos = Number(prompt("Quantidade de kWh consumidos no mês:"))

                if (!numeroConta || numeroConta.trim() === "" || isNaN(kwhConsumidos) || kwhConsumidos < 0) {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente\nVoltando ao início :)")
                } else {
                    let residencial = new ConsumidorResidencial(numeroConta, kwhConsumidos)
                    listaConsumidores.push(residencial)
                }
                break

            case 2:
                numeroConta = String(prompt("Número da conta do consumidor:"))
                kwhConsumidos = Number(prompt("Quantidade de kWh consumidos no mês:"))

                if (!numeroConta || numeroConta.trim() === "" || isNaN(kwhConsumidos) || kwhConsumidos < 0) {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente\nVoltando ao início :)")
                } else {
                    let comercial = new ConsumidorComercial(numeroConta, kwhConsumidos)
                    listaConsumidores.push(comercial)
                }
                break

            case 0:
                alert("ENCERRANDO PROGRAMA...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    let totalKwhGeral: number = 0

    console.log(" ===== DETALHAMENTO DAS FATURAS =====")

    for (let i = 0; i < listaConsumidores.length; i++) {
        let consumidor = listaConsumidores[i]
        let valorFatura = consumidor.calcularValorFatura()
        totalKwhGeral += consumidor.kwhConsumidos

        console.log(`Conta: ${consumidor.numeroConta} | Consumo: ${consumidor.kwhConsumidos} kWh | Valor da Fatura: R$ ${valorFatura.toFixed(2)}`)
    }

    let mediaKwh: number = listaConsumidores.length > 0 ? totalKwhGeral / listaConsumidores.length : 0

    console.log(`\n ===== RESUMO DAS FATURAS ===== \nTotal de contas cadastradas: ${listaConsumidores.length}\nTotal de kWh consumidos: ${totalKwhGeral} kWh\nMédia de consumo geral: ${mediaKwh.toFixed(2)} kWh`)
}