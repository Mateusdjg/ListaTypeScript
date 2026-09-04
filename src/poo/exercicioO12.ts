// 12. Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

class SitemaLocadora {
    modeloCarro:string
    valorDiaria:number
    quantidadeDias:number

    constructor(modeloCarro:string, valorDiario:number, quantidadeDias:number){
        this.modeloCarro = modeloCarro
        this.valorDiaria = valorDiario
        this.quantidadeDias = quantidadeDias
    }

    calcularValorTotalAluguel(quanDias:number, valorDiario:number):number{
        let calculo:number = quanDias * valorDiario
        return calculo
    }

    exibir(){
        alert(`============ RESUMO DA LOCAÇÃO ============\nModelo do carro: ${this.modeloCarro}\nValor da di`)
    }
}