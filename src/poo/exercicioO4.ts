// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function exercicio4poo():void{

    class Retangulo {
        LadoA:number
        Ladob:number

        constructor(ladoA:number, ladoB:number){
            this.LadoA = ladoA
            this.Ladob = ladoB
        }
        area():number{
            return this.LadoA * this.Ladob
        }

        perimetro():number{
            return (this.LadoA * 2) + (this.Ladob * 2)
        }

        exibir():void{
            console.log(`Valor dos lados: A: ${this.LadoA}   B: ${this.Ladob}\n Área: ${this.area()}\n Perímetro: ${this.perimetro()} `)
        }
    }

    //MEDIDAS DO LOCAL 
    let medida1:number = Number(prompt("Informe a largura do local: "))
    let medida2:number = Number(prompt("Informe o comprimento do local: "))

    //MEDIDAS DO PISO
    let medida3:number = Number(prompt("Informe a largura do piso: "))
    let medida4:number = Number(prompt("Informe o comprimento do piso: "))

    let local = new Retangulo(medida1, medida2)
    let piso = new Retangulo(medida3, medida4)


    let quantidadesDoPiso = local.area() / piso.area()
    let quantidadeDeRodape = local.perimetro() / piso.Ladob

    console.log(`Quantidade de pisos: ${quantidadesDoPiso}`)
    console.log(`Quantidade de rodapés: ${quantidadeDeRodape}`)
}