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


       abstract calcularTotal():number
   }


   class PedidoMesa extends Pedido {
       constructor(numeroMesa: number, valorIngredientes: number){
           super(numeroMesa, valorIngredientes)
       }


       calcularTotal(): number {
           return this.valorIngredientes
       }
   }


   class PedidoDelivery extends Pedido {
       endereco: string
       private taxaEntrega: number


       constructor(endereco: string, taxaEntrega: number, numeroMesa: number, valorIngredientes: number){
           super(numeroMesa, valorIngredientes)
           this.endereco = endereco
           this.taxaEntrega = taxaEntrega
       }


       calcularTotal(): number {
           return this.valorIngredientes + this.taxaEntrega
       }
   }


   let pedidos: Pedido[] = []
   let op: string = "s", numeroMesa: number, valorIngredientes: number
   while(op.toLowerCase() != "n"){
       let consumo: number = Number(prompt("Consumo na 1 - Pizzaria | 2 - Delivery"))
       switch(consumo){
           case 1:
               numeroMesa = Number(prompt("Número da mesa"))
               valorIngredientes = Number(prompt("Valor dos ingredientes"))


               let pedidoMesa = new PedidoMesa(numeroMesa, valorIngredientes)


               pedidos.push(pedidoMesa)
               break
           case 2:
               numeroMesa = Number(prompt("Número da mesa"))
               valorIngredientes = Number(prompt("Valor dos ingredientes"))
               let endereco: string = String(prompt("Endereço"))
               let taxaEntrega: number = Number(prompt("Taxa de entrega"))


               let pedidoDelivery = new PedidoDelivery(endereco, taxaEntrega, numeroMesa, valorIngredientes)


               pedidos.push(pedidoDelivery)
               break
           default:
               alert("Opção inválida!!!")
               break
       }

       op = String(prompt("Mais um pedido[ s | n ]"))

   }

   let faturamentoTotal: number = 0
   for(let i = 0; i<pedidos.length; i++){
        faturamentoTotal += pedidos[i].calcularTotal()
   }

   alert(`==== FATURAMENTO TOTAL ====\nTOTAL: ${faturamentoTotal}`)


}
