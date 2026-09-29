// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o

// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function exercicio34poo(): void {
    abstract class Veiculo {
        private _placa: string
        private _horaEntrada: string
        private _horas: number

        constructor(placa: string, horaEntrada: string, horasPermanencia: number) {
            this._placa = placa
            this._horaEntrada = horaEntrada
            this._horas = horasPermanencia
        }

        get placa(): string {
            return this._placa
        }

        get horaEntrada(): string {
            return this._horaEntrada
        }

        get horas(): number {
            return this._horas
        }

        abstract calcularValor(): number
    }

    class Carro extends Veiculo {
        constructor(placa: string, horaEntrada: string, horasPermanencia: number) {
            super(placa, horaEntrada, horasPermanencia)
        }

        calcularValor(): number {
            return this.horas * 5.00
        }
    }

    class Moto extends Veiculo {
        constructor(placa: string, horaEntrada: string, horasPermanencia: number) {
            super(placa, horaEntrada, horasPermanencia)
        }

        calcularValor(): number {
            return this.horas * 3.00
        }
    }

    let listaVeiculos: Veiculo[] = []
    let executar: boolean = true, placa: string, horaEntrada: string, horasPermanencia: number

    while (executar) {
        let tipo = Number(prompt("=== SISTEMA DE ESTACIONAMENTO ===\nTipo de veículo saindo:\n1 - Carro (R$ 5,00/h)\n2 - Moto (R$ 3,00/h)\n0 - Encerrar programa"))

        switch (tipo) {
            case 1:
                placa = String(prompt("Placa do carro:"))
                horaEntrada = String(prompt("Horário de entrada [ex: 20:00]:"))
                horasPermanencia = Number(prompt("Quantidade de horas de permanência:"))

                if (!placa || placa.trim() === "" || !horaEntrada || horaEntrada.trim() === "" || isNaN(horasPermanencia) || horasPermanencia <= 0) {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente.\nVoltando ao início :)")
                } else {
                    let carro = new Carro(placa, horaEntrada, horasPermanencia)
                    listaVeiculos.push(carro)
                }
                break

            case 2:
                placa = String(prompt("Placa da moto:"))
                horaEntrada = String(prompt("Horário de entrada [ex: 20:00]:"))
                horasPermanencia = Number(prompt("Quantidade de horas de permanência:"))

                if (!placa || placa.trim() === "" || !horaEntrada || horaEntrada.trim() === "" || isNaN(horasPermanencia) || horasPermanencia <= 0) {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente.\nVoltando ao início :)")
                } else {
                    let moto = new Moto(placa, horaEntrada, horasPermanencia)
                    listaVeiculos.push(moto)
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
    let faturamentoTotal: number = 0

    console.log(" ===== DETALHAMENTO DE SAÍDAS DO DIA =====")

    for (let i = 0; i < listaVeiculos.length; i++) {
        let valorCalculado = listaVeiculos[i].calcularValor()
        faturamentoTotal += valorCalculado

        console.log(`Placa: ${listaVeiculos[i].placa} | Hora de Entrada: ${listaVeiculos[i].horaEntrada} | Permanência: ${listaVeiculos[i].horas}h | Valor Pago: R$ ${valorCalculado.toFixed(2)}`)
    }

    console.log(`\n ===== FATURAMENTO TOTAL ARRECADADO ===== \nTotal: R$ ${faturamentoTotal.toFixed(2)}`)
}