// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function exercicio3():void{
    let calculadora:number = Number(prompt("----CALCULADORA----\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha: "))
    let nu1:number = Number(prompt("Informe o primeiro número: "))
    let nu2:number = Number(prompt("Informe o segundo número: "))
    switch(calculadora){
        case 1:
            let soma:number = nu1 + nu2
            console.log(`SOMA: ${soma}`)
            break
        case 2:
            let subtracao:number = nu1 - nu2
            console.log(`SUBTRAÇÃO: ${subtracao}`)
            break
        case 3:
            let multiplicacao:number = nu1 * nu2
            console.log(`MULTIPLICAÇÃO: ${multiplicacao}`)
            break
        case 4:
            let divisao:number = nu1 / nu2
            console.log(`DIVISÃO: ${divisao}`)
            break
    }
}


