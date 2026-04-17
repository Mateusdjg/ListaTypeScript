// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let opcao:number = 0, QPares:number = 0, QImpares:number = 0
while(opcao != -1){
    let pergunta:number = Number(prompt("Informe um número: "))
    if(pergunta % 2 == 0){
        QPares++
    }
    else{
        QImpares++
    }
    opcao = Number(prompt("Deseja continuar[Digite qualquer número e digite -1 para sair]: "))
}