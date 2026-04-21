// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function exercicio4r():void{
    let opcao:number = 0, QPares:number = 0, QImpares:number = 0
    while(opcao != -1){
        let pergunta:number = Number(prompt("Informe um número: "))
        for(let i = 0; i <= pergunta; i++){
            if(i % 2 == 0){
            QPares++
            }
            else{
            QImpares++
            }
        }
        
        opcao = Number(prompt("Deseja continuar[Digite qualquer número para continuar e digite -1 para sair]: "))
    }
    console.log(`Quantidade de números ímpares: ${QImpares}\nQuantidade de números pares: ${QPares}`)
}
