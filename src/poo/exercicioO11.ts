// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function exercicio11poo():void{
    class Lanchonete {
        nomeCliente:string
        numeroPedido:number
        nomePedido:string
        valorPedido:number


        constructor(nomeCliente:string, numeroPedido:number, nomePedido:string, valorPedido:number){
            this.nomeCliente = nomeCliente
            this.numeroPedido = numeroPedido
            this.valorPedido = valorPedido
            this.nomePedido = nomePedido
        }


        exibir(){
            alert(`======= PEDIDO =======\nNome do cliente: ${this.nomeCliente}\nNome do Pedido: ${this.nomePedido}\nValor do Pedido: ${this.valorPedido}`)
        }
    }


    let x:string = "s", valorPedido = 0, nomePedido:string
    while(x != "n"){
        let nome:string = String(prompt("Informe seu nome: "))
        let pedido:number = Number(prompt(`======== Pedidos ========\n1. X-Burguer\n2. X-Salada\n3. Batata Frita\n4. Refrigerante\n5. Sair\nEscolha o número do seu pedido: `))
        nomePedido = ""
        if(pedido == 1){
            valorPedido = 15
            nomePedido = "X-Burguer"
        
        }
        else if(pedido == 2){
            valorPedido = 18
            nomePedido = "X-Salada"
        }
        else if(pedido == 3){
            valorPedido = 10
            nomePedido = "Batata Frita"
        }
        else if(pedido == 4){
            valorPedido = 5
            nomePedido = "Refrigerante"
        }


        let novoPedido = new Lanchonete(nome, pedido, nomePedido, valorPedido )
        novoPedido.exibir()
        x = String(prompt("Deseja fazer outro pediddo[S - sim  N - Não]: ")).toLocaleLowerCase()
    }
}