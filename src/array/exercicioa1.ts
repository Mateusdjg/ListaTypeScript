// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa
export function exercicioa1():void{
    let lista:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let numerosPares = lista.filter((n) => {return n % 2 == 0})
    let numerosImpares = lista.filter((n) => {return n % 2 == 1})
    let multiploDoisTresQuatro = lista.filter((n) => {return n % 2 == 0 && n % 3 == 0 && n % 4 == 0})


    console.log(`Números pares: ${numerosPares}\nNúmeros ímpares: ${numerosImpares}\nTodos os múltiplos de 2,3 e 4: ${multiploDoisTresQuatro}\nLista reversa: ${[...lista].reverse()}`)
    console.log(lista)
}  
