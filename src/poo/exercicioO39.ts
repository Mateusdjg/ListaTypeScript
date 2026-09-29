// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal():number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.

export function exercicio39poo(): void {
    abstract class Pedido {
        private _numeroPedido: number
        private _valorBase: number

        constructor(numeroPedido: number, valorBase: number) {
            this._numeroPedido = numeroPedido
            this._valorBase = valorBase
        }

        get numeroPedido(): number {
            return this._numeroPedido
        }

        get valorBase(): number {
            return this._valorBase
        }

        abstract calcularTotal(): number
    }

    class PedidoLocal extends Pedido {
        constructor(numeroPedido: number, valorBase: number) {
            super(numeroPedido, valorBase)
        }

        calcularTotal(): number {
            return this.valorBase * 1.10
        }
    }

    class PedidoDriveThru extends Pedido {
        constructor(numeroPedido: number, valorBase: number) {
            super(numeroPedido, valorBase)
        }

        calcularTotal(): number {
            return this.valorBase + 3.00
        }
    }

    let listaPedidos: Pedido[] = []
    let faturamentoBruto: number = 0
    let executar: boolean = true, numeroPedido: number, valorBase: number

    while (executar) {
        let tipo = Number(prompt("=== DRIVE-THRU RESTAURANTE ===\nTipo de Pedido:\n1 - Pedido Local\n2 - Pedido Drive-Thru [+R$ 3,00 embalagem]\n0 - Fechar Caixa"))

        switch (tipo) {
            case 1:
                numeroPedido = Number(prompt("Número do pedido:"))
                valorBase = Number(prompt("Valor base dos itens [R$]:"))

                if (isNaN(numeroPedido) || numeroPedido <= 0 || isNaN(valorBase) || valorBase <= 0) {
                    alert("Entrada inválida! Digite números maiores que zero.")
                } else {
                    let pedidoLocal = new PedidoLocal(numeroPedido, valorBase)
                    faturamentoBruto += pedidoLocal.calcularTotal()
                    listaPedidos.push(pedidoLocal)
                }
                break

            case 2:
                numeroPedido = Number(prompt("Número do pedido:"))
                valorBase = Number(prompt("Valor base dos itens [R$]:"))

                if (isNaN(numeroPedido) || numeroPedido <= 0 || isNaN(valorBase) || valorBase <= 0) {
                    alert("Entrada inválida! Digite números maiores que zero.")
                } else {
                    let pedidoDrive = new PedidoDriveThru(numeroPedido, valorBase)
                    faturamentoBruto += pedidoDrive.calcularTotal()
                    listaPedidos.push(pedidoDrive)
                }
                break

            case 0:
                alert("FECHANDO CAIXA...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    console.log(" ===== RESUMO DE FECHAMENTO DO CAIXA =====")

    for (let i = 0; i < listaPedidos.length; i++) {
        let pedido = listaPedidos[i]
        let tipoTexto = pedido instanceof PedidoLocal ? "Local" : "Drive-Thru"
        console.log(`Pedido nº: ${pedido.numeroPedido} | Tipo: ${tipoTexto} | Valor Base: R$ ${pedido.valorBase.toFixed(2)} | Total: R$ ${pedido.calcularTotal().toFixed(2)}`)
    }

    console.log(`\nTotal de pedidos processados: ${listaPedidos.length}\nFaturamento Bruto Total: R$ ${faturamentoBruto.toFixed(2)}`)
}