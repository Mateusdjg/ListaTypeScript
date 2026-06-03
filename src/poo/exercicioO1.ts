// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

class Bola{
    _cor:string
    _circuferencia:number
    _material:string

    constructor(cor:string, circuferencia:number, material:string){
        this._cor = cor
        this._circuferencia = circuferencia
        this._material = material
    }

    trocaCor():void{
        this._cor = "Verde"
    }

    exibir():void{
        console.log(`Cor: ${this._cor}  |  Circuferencia: ${this._circuferencia}  |  Material: ${this._material}`)
    }

    mostraCor():void{
        this._cor = "Vermelho"
        console.log(`Cor: ${this._cor}  |  Circuferencia: ${this._circuferencia}  |  Material: ${this._material}`)
    }
} 

let novaBola = new Bola("Azul", 50, "Pingo de leite")
novaBola.exibir()
novaBola.mostraCor()