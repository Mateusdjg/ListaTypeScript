// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function exercicio5poo():void{
    class Pessoa{
        nome:string
        idade:number
        peso:number
        altura:number

        constructor(nome: string, idade:number, peso:number, altura:number){
            this.nome = nome
            this.idade = idade
            this.peso = peso
            this.altura = altura
        }

        //MÉTODOS

        envelhecer(){
        
            if(this.idade < 21){
                this.crescer(0.5)
            }
            this.idade = this.idade + 1
        }

        engordar():number{
            return this.peso = this.peso + 2
        }

        esmagrecer():number{
            return this.peso = this.peso - 1
        }

        crescer(valor:number):number{
            return this.altura = this.altura + valor
        }
    }

    let novaPessoa = new Pessoa("Mateus", 17, 64, 170)

    console.log("-----ANTES-----")
    console.log(`Idade inicial: ${novaPessoa.idade} anos`)
    console.log(`Altura inicial: ${novaPessoa.altura} cm`)
    console.log(`Peso inicial: ${novaPessoa.peso} Kg`)
    while(true){
        if(novaPessoa.idade < 21){
            novaPessoa.envelhecer()
            novaPessoa.engordar()
            novaPessoa.esmagrecer()
        }
        else{
            break
        }
    }
    console.log("-----DEPOIS-----")
    console.log(`Idade após envelhecer: ${novaPessoa.idade} anos`)
    console.log(`Altura após envelhecer: ${novaPessoa.altura} cm`)
    console.log(`Peso após envelhecer: ${novaPessoa.peso} Kg`)
}