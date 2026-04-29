// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.
export function exerciciof10():void{
    function calcular_imc(peso:number, altura:number):number{
        let imc:number = peso/altura**2
        return imc
    }
    function classificar_imc(valor_imc:number):string{
        if(valor_imc < 18.5){
            return "Abaixo do Peso"
        }
        else if(valor_imc >= 18.5 && valor_imc <= 24.9){
            return "Peso Normal"
        }
        else{
            return "Sobrepeso"
        }
    }
    function exibir_laudo(nome:string, classificacao:string):any{
        console.log(`Paciente: ${nome}\nStatus: ${classificacao}`)
    }

    let nome:string = String(prompt("Informe seu nome: "))
    let peso:number = Number(prompt("Informe seu peso: "))
    let altura:number = Number(prompt("Informe sua altura: "))
    let valor_imc:number = calcular_imc(peso, altura)
    let classificacao:string = classificar_imc(valor_imc)
    exibir_laudo(nome, classificacao)
}