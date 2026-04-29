// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function exerciciof8():void{
    function descontos(preco:number, quantidade:number):number{
        if(quantidade > 10){
            let subtracao:number = preco * 0.05
            let valorFinal:number = preco - subtracao
            return valorFinal
        }
        else{
            return 0
        }
    }
    let preco:number, totalGeral:number = 0, quantiProdutoCadastrados:number = 0
    while(true){
        preco = Number(prompt("Informe o preço do produto [0 para encerrar]: "))
        if(preco == 0){
            break
        }
        let quantidade:number = Number(prompt("Informe a quantidade comprada: "))
        let descontofuncao:number = descontos(preco, quantidade)
        totalGeral = descontofuncao + totalGeral
        quantiProdutoCadastrados++
    }
    let mediaPrecoProdutos:number = totalGeral/quantiProdutoCadastrados
    console.log(`==== ESTOQUE DE LOJA ====\nTotal geral investido no estoque: ${totalGeral}\nMédia de preço dos produtos cadastrados: ${mediaPrecoProdutos}`)
}