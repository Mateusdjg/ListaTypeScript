// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.
export function exercicioa2():void{
    let numero:number = 0, contador:number = 0, somar:number = 0
    let listaNotas:number[] = []
    while(numero != -1){
        numero = Number(prompt("Informe um número: "))
        if(numero == -1){
            break
        }
        listaNotas.push(numero)
        somar = numero + somar
        contador++
    }
    let media = listaNotas.reduce((acumulador, atual) => acumulador + atual,0) /listaNotas.length
    let acimaMedia = listaNotas.filter ((n) => {return n >= media})
    console.log(`Quantidade de notas lidas: ${contador}\nTodas as notas na ordem que foram informadas: ${listaNotas}\nTodas as notas na ordem inversas: ${[...listaNotas].reverse()}\nSomas das notas: ${somar}\nMédia das notas: ${media}\nNotas acima da média: ${acimaMedia}`)
}
