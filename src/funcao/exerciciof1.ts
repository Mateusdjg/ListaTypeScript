// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
export function exerciciof1():void{
    let soma:number = 0
    function somarAte(numero:number):number{
        for(let i = 1; i <= numero; i++){
            soma = soma + i
        }
        return soma
    }
    let numero:number = Number(prompt("Informe um valor: "))
    let funcao:number = somarAte(numero)
    console.log(`SOMAS DOS NÚMEROS QUE ESTÃO ENTRE ${numero}\nSOMA: ${funcao}`)
}
