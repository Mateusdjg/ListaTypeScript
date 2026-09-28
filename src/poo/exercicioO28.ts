// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function exercicio28poo(): void{
    class Quarto {
        numeroQuarto: number
        precoDiaria: number
        precoTotal: number = 0
        constructor(numeroQuarto: number, precoDiaria: number){
            this.numeroQuarto = numeroQuarto
            this.precoDiaria = precoDiaria
        }

        calcularTotal(dias: number): number{
            return this.precoTotal = this.precoDiaria * dias
        }
    }

    class QuartoBasico extends Quarto{
        constructor(numeroQuarto: number, precoDiaria: number){
            super(numeroQuarto, precoDiaria)
        }
    }

    class SuiteMaster extends Quarto {
        valorHidromassagem: number = 40
        usoHidro: boolean = false
        constructor(numeroQuarto: number, precoDiaria: number){
            super(numeroQuarto, precoDiaria)
        }
        verificarUso(usouHidro: boolean): void{
            if(usouHidro == true){
                this.usoHidro = true
            }
        }
        calcularTotal(dias: number): number {
            if(this.usoHidro == true){
                return this.precoTotal = this.precoDiaria * dias + this.valorHidromassagem
            }
            else{
                return this.precoTotal = this.precoDiaria * dias
            }
            
        }
    }

    let listaQuartos: Quarto[] = []
    let executar: boolean = true, numeroQuarto: number, precoDiaria: number, qtnDias: number

    while(executar){
        let tipo = Number(prompt("Tipo de Quarto\n1 - Básico\n2 - Suíte Master\n0 - Para encerrar"))
        switch(tipo){
            case 1:
                numeroQuarto = Number(prompt("Número do quarto:"))
                precoDiaria = Number(prompt("Preço da diária:"))
                qtnDias = Number(prompt("Quantidade de dias alugado:"))

                if (isNaN(numeroQuarto) || numeroQuarto <= 0 || isNaN(precoDiaria) || precoDiaria <= 0 || isNaN(qtnDias) || qtnDias <= 0) {
                    alert("Entrada inválida! Insira números válidos e maiores que zero.\nVoltando ao menu.")
                    break
                }

                let basico = new QuartoBasico(numeroQuarto, precoDiaria)
                basico.calcularTotal(qtnDias)
                listaQuartos.push(basico)
                break
            case 2:
                numeroQuarto = Number(prompt("Número do quarto:"))
                precoDiaria = Number(prompt("Preço da diária:"))
                qtnDias = Number(prompt("Quantidade de dias alugado:"))

                if (isNaN(numeroQuarto) || numeroQuarto <= 0 || isNaN(precoDiaria) || precoDiaria <= 0 || isNaN(qtnDias) || qtnDias <= 0) {
                    alert("Entrada inválida! Insira números válidos e maiores que zero.\nVoltando ao menu.")
                    break
                }

                let usouH = Number(prompt("Usou a Hidromassagem?[ 1 - Sim | 2 - Não ]"))
                let uso: boolean = (usouH === 1)
                let suite = new SuiteMaster(numeroQuarto, precoDiaria)
                suite.verificarUso(uso)
                suite.calcularTotal(qtnDias)
                listaQuartos.push(suite)
                break
            case 0:
                alert("Encerrando...")
                executar = false
                break
            default:
                alert("Opção inválida!")
                break
        }
    }
    console.log(" ====== QUARTOS COM FATURAMENTO SUPERIOR A R$ 1.000.00 ====== ")
    
    let quartoAlFaturamento = listaQuartos.filter(quarto => quarto.precoTotal > 1000)
    if(quartoAlFaturamento.length == 0){
        console.log("Nenhum quarto faturou R$ 1.000.00 ou mais")
    }
    else {
        for(let quarto of quartoAlFaturamento){
            console.log(`Quarto Nº: ${quarto.numeroQuarto} | Faturamento total: ${quarto.precoTotal.toFixed(2)}`)
        }
    }
}