// 16. Herança Polimorfismo Encapsulamento
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. Mamíferos têm tipo de
// alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.

abstract class Animal{
    nome:string
    especie:string
    idade:number
    som:string
    constructor(nome:string, especie:string, idade:number, som:string){
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.som = som
    }

    abstract emitirSom():{

    }
}
class Mamiferos extends Animal {
    constructor(nome: string, especie:string, idade:number, som:string){
        super(nome, especie, idade, som)
    }

    emitirSom():string{
        return `Emitir som: ${this.som}`
    }
}