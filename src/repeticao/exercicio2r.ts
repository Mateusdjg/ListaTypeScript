// 2. Desenvolva a tabuada de um número usando for.

export function exercicio2r():void{
    let multiplica:number
    let nume:number = Number(prompt("Informe um número para ver a sua tabuada: "))
    for(let i = 1; i <=10; i++){
        multiplica = nume * i
        console.log(`${nume} X ${i} = ${multiplica}`)
    }
}
