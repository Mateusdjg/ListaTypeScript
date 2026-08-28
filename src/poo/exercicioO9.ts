// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function exercicio9poo():void{
    class Produto {
        nome:string
        preco:number
        quantidade:number

        constructor(nome:string, preco:number, quantidade:number){
            this.nome = nome
            this.preco = preco
            this.quantidade = quantidade
        }

        calValorTotal():number{
            return this.preco * this.quantidade
        }

        exibir():void{
            alert(`Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}\nValor total em estoque: ${this.calValorTotal()}`)
        }
    }

    let nome:string = String(prompt("Informe o nome do produto: "))
    let preco:number = Number(prompt("Informe o preço do produto: "))
    let quantidade:number = Number(prompt("Informe a quantidade em estoque: "))

    let novoProduto = new Produto(nome, preco, quantidade)
    novoProduto.exibir()
}