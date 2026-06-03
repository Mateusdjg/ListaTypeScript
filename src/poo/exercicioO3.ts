// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos: Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

class Retangulo {
    LadoA:number
    Ladob:number

    constructor(ladoA:number, ladoB:number){
        this.LadoA = ladoA
        this.Ladob = ladoB
    }

    mudarValor():void{
        this.LadoA = 5
        this.Ladob = 9
    }

    area():number{
        return this.LadoA * this.Ladob
    }

    perimetro():number{
        return (this.LadoA * 2) + (this.Ladob * 2)
    }

    exibir():void{
        this.mudarValor()
        console.log(`Valor dos lados: A: ${this.LadoA}   B: ${this.Ladob}\n Área: ${this.area()}\n Perímetro: ${this.perimetro()} `)
    }
}

let novoRetangulo = new Retangulo(4,8)
novoRetangulo.exibir()