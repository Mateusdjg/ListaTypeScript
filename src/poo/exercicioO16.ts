// 16. Herança Polimorfismo Encapsulamento
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. 
// Mamíferos têm tipo de alimentação; 
// Aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.

export function exercicio16poo(): void {
    abstract class Animal {
        nome: string
        especie: string
        idade: number
        alimentacao: string
        private _som: string

        constructor(nome: string, especie: string, idade: number, alimentacao: string, som: string) {
            this.nome = nome
            this.especie = especie
            this.idade = idade
            this.alimentacao = alimentacao
            this._som = som
        }

        get som(): string {
            return this._som
        }

        abstract emitirSom(): {

        }
    }

    class Mamiferos extends Animal {
        constructor(nome: string, especie: string, idade: number, alimentacao: string, som: string) {
            super(nome, especie, idade, alimentacao, som)
        }

        get som(): string {
            return this.som
        }

        emitirSom(): string {
            return `Emitir som: ${this.som}`
        }
    }

    class Aves extends Animal {
        migratoria: boolean
        constructor(migratoria: boolean, nome: string, especie: string, idade: number, alimentacao: string, som: string) {
            super(nome, especie, idade, alimentacao, som)
            this.migratoria = migratoria
        }

        get som(): string {
            return this.som
        }

        emitirSom(): string {
            return (`Emitir som: ${this.som}`)
        }
    }

    let mamiferos: Mamiferos[] = []
    let aves: Aves[] = []
    let continuar: string = "", nome: string, idade: number, especie: string, alimentacao: string, som: string, verificarMigratoria: number, aveMigratoria: boolean

    while (continuar.toLowerCase() != "n") {
        let classe: number = Number(prompt(`Qual é a classe biológica do animal? (1- Mamífero | 2- Ave): `))

        switch (classe) {
            case 1:
                nome = String(prompt(`insira o nome do animal: `))
                especie = String(prompt(`Insira a espécie do animal: `))
                idade = Number(prompt(`Insira a idade do animal: `))
                alimentacao = String(prompt(`Qual é a alimentação do animal?: `))
                som = String(prompt(`Insira o barulho que o animal faz: `))

                let mamifero = new Mamiferos(nome, especie, idade, alimentacao, som)
                mamiferos.push(mamifero)
                break
            case 2:
                nome = String(prompt(`insira o nome do animal: `))
                especie = String(prompt(`Insira a espécie do animal: `))
                idade = Number(prompt(`Insira a idade do animal: `))
                alimentacao = String(prompt(`Qual é a alimentação do animal?: `))
                som = String(prompt(`Insira o barulho que o animal faz: `))
                verificarMigratoria = Number(prompt(`A ave é migratória? (1- sim | 2- não): `))
                if (verificarMigratoria == 1) {
                    aveMigratoria = true
                }
                else {
                    aveMigratoria = false
                }
                let ave = new Aves(aveMigratoria, nome, especie, idade, alimentacao, som)
                aves.push(ave)
                break
            default:
                alert(`Opção inválida!!!`)
                break
        }

        alert("!! ABRA O CONSOLE PARA VER OS RESULTADOS !!")

        console.log("---------- ANIMAIS MAMÍFEROS ----------")
        for (let i = 0; i < mamiferos.length; i++) {
            console.log(`Nome: ${mamiferos[i].nome}\nEspecie: ${mamiferos[i].especie}\nIdade: ${mamiferos[i].idade}\nAlimentação: ${mamiferos[i].alimentacao}\nSom: ${mamiferos[i].emitirSom()}`)
        }

        console.log("---------- SALÁRIO DOS FUNCIONÁRIOS ASSALARIADOS ----------")
        for (let i = 0; i < aves.length; i++) {
            console.log(`Nome: ${aves[i].nome}\nEspecie: ${aves[i].especie}\nIdade: ${aves[i].idade}\nAlimentação: ${aves[i].alimentacao}\nMigratória: ${aves[i].migratoria}\nSom: ${aves[i].emitirSom()}`)
        }
    }
}