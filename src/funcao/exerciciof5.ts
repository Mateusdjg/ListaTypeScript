// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function exerciciof5():void{
    let mulTres:number[] = []
    function multiploDeTres(num1:number, num2:number):any{
        for(num1; num1<=num2;num1++){
            if(num1 % 3 == 0){
                mulTres.push(num1)
            }
        }
        console.log(`Números multiplos de Três: ${mulTres}`)
    }
    let num1:number = Number(prompt("Informe um número: "))
    let num2:number = Number(prompt("Informe um número: "))
    multiploDeTres(num1,num2)
}
