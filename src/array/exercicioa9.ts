// 9. Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
// inicio e fim. A função deve seguir os seguintes requisitos:
//  Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
// seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
//  Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
// contidos nesse intervalo (inclusive o início e o fim).
//  Durante a iteração, armazene todos os números do intervalo em um array.
//  Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
// a lista criada.
//  Imprima no console apenas os números que são múltiplos e divisores da sua idade.
//  Ao final, exiba a quantidade total de números que foram impressos.

export function exercicioa9():void{
    let intervaloInicioFim: number[] = []
    function gerarIntervaloFiltrado(inicio:number, fim:number, idade:number):any{
        if(inicio > fim){
            console.log("Invertendo valores")
            let novoF:number = inicio
            inicio = fim
            fim = novoF
        }

        for(let i = inicio; i <= fim; i++){
            intervaloInicioFim.push(i)
        }
        let multiplosDivisores = intervaloInicioFim.filter((numero) => { return numero % idade == 0 || idade % numero == 0})
        for(let i = 0; i < multiplosDivisores.length;i++){
            console.log(multiplosDivisores[i])
        }
        console.log(`Quantidade total de números impressos: ${multiplosDivisores.length}`)
    }
    let idade:number = Number(prompt("Informe sua idade: "))
    let inicio:number = Number(prompt("Informe o número de inicio para saber os números múltiplos e divisores da sua idade em um determinado intervalo: "))
    let fim:number = Number(prompt("Informe agora o fim desse intervalo: "))
    gerarIntervaloFiltrado(inicio,fim,idade)
}