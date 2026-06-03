// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class Quadrado{
    tamanhoLados:number

    constructor(tamanhoLados:number){
        this.tamanhoLados = tamanhoLados
    }

    mudarValor():void{
        this.tamanhoLados = 5
    }

    exibir():void{
        this.mudarValor()
        console.log(`Tamanho dos lados: ${this.tamanhoLados}cm  |  Área: ${this.tamanhoLados * this.tamanhoLados}cm²`)
    }
}

let novoQuadrado = new Quadrado(4)
novoQuadrado.exibir()