// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

export function exercicio5r():void{
    function classificarVenda(valor:number):string{
        if(valor < 1000){
            return "Bronze"
        }
        else if(valor <= 5000){
            return "Prata"
        }
        else{
            return "Ouro"
        }
    }

    let vendedores:number
    let valor:number
    let maiorVendas:number = 0
    let ouro:number = 0
    let soma:number = 0

    for(vendedores = 1; vendedores <= 5; vendedores++){
        valor = Number(prompt("Informe o total de vendas: "))
        let funcao:string = classificarVenda(valor)
        if(valor > maiorVendas){
            maiorVendas = valor
        }
        if(funcao == "Ouro"){
            ouro++
        }
        soma = soma + valor
    }
    console.log(`TOTAL DE VENDAS DA EQUIPE: ${soma}\nMAIOR VENDA: ${maiorVendas}\nVENDEDORES CATEGORIA OURO: ${ouro}`)
}
