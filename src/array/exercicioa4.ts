// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

export function exercicioa4():void{
    let notas:number[] = []
    function calcular_media(notas:number[]){
        
    }
    let op:number = 0
    while(op != 2){
        let nota:number = Number(prompt("Informe a nota do aluno: "))
        notas.push(nota)
        op = Number(prompt("Deseja continuar ?\n1. Sim\n2. Não\nEscolha: "))
        if(isNaN(op) || op < 1 || op > 2){
            alert("Opção ínvalida!")
            let verificar:boolean = true
            while(verificar){
                op = Number(prompt("Deseja continuar ?\n1. Sim\n2. Não\nEscolha: "))
                if(op == 2){
                    verificar = false
                    break
                }
                else if (op == 1){
                    verificar = false
                }
                else{
                    alert("Opção ínvalida!")
                }
            }
        }
    }
    let mediaNotas = notas.reduce((acumulador, atual) => (acumulador + atual)/2)
    console.log(`Média: ${mediaNotas.toFixed(2)}`)
    
}
    