// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function exercicio20poo(): void{
    abstract class Pedido {
        private _numeroMesa: number
        private _valorIngredientes: number

        constructor(numeroMesa: number, valorIngredientes: number){
            this._numeroMesa = numeroMesa
            this._valorIngredientes = valorIngredientes
        }

        get numeroMesa(): number{
            return this._numeroMesa
        }
        get valorIngredientes(): number{
            return this._valorIngredientes
        }

        
    }
}