// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function exercicio1r():void{
    let numero:number = 1, quantidade:number = 0, soma:number = 0
    while(numero != 0){
        numero = Number(prompt("Informe um número[0 para sair]: "))
        soma = soma + numero
        quantidade++
    }
    console.log(`Quantidade de números digitados: ${quantidade}`)
    console.log(`Soma de todos os números digitados: ${soma}`)
}
