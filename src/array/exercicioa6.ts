// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.
export function exercicioa6(): void{

    let lista:string[] = []
    for(let i = 1; i <= 15; i++){
        let nomes:string = prompt(`Informe o ${i}º nome: `)!
        lista.push(nomes)
    }

    let listaC = lista.sort((a, b) => {
        if(a < b) return -1
        if(a > b) return 1
        return 0
    })

    console.log(`Nomes digitados: ${lista}`)
    console.log(`Nomes ordem Crescente: ${lista.sort()}`)
    console.log(`Nomes de forma ordenada: ${listaC}`)
}