// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

export function exerciciof3():void{
    function desenhar_triangulo(valor:number):void{
        for(let i = 1; i <= valor; i++){
            console.log("*".repeat(i))
        }
    }
    let valor:number = Number(prompt("Informe um valor: "))
    desenhar_triangulo(valor)
}
