// 12. Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function exercicio12poo():void{
    class Locadora {
        modeloCarro:string
        valorDiaria:number
        quantidadeDias:number

        constructor(modeloCarro:string, valorDiario:number, quantidadeDias:number){
            this.modeloCarro = modeloCarro
            this.valorDiaria = valorDiario
            this.quantidadeDias = quantidadeDias
        }

        calcularValorTotalAluguel():number{
            let calculo:number = this.quantidadeDias * this.valorDiaria
            return calculo
        }

        exibir(){
            alert(`============ RESUMO DA LOCAÇÃO ============\nModelo do carro: ${this.modeloCarro}\nValor da diária: R$ ${this.valorDiaria}\nDias alugado: ${this.quantidadeDias}\nValor total do aluguel: R$ ${this.calcularValorTotalAluguel()}`)
        }
    }

    let novaLocao:string = ""
    while(novaLocao != "n"){
        let modeloCarro:string = String(prompt("Informe o modelo do carro: "))
        let diaria:number = Number(prompt("Informe o valor da diária: "))
        let diasAlugado:number = Number(prompt("Informe a quantidade de dias alugado: "))

        let locacao = new Locadora(modeloCarro, diaria, diasAlugado)
        locacao.exibir()

        novaLocao = String(prompt("Deseja fazer uma nova locação?[S | N]: ")).toLowerCase()
        if (novaLocao !== "s" && novaLocao !== "n") {
            alert("Opção inválida! Encerrando o sistema.")
            break
        }
            
    }
    


}