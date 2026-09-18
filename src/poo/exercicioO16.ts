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

        abstract emitirSom(): string
    }

    class Mamiferos extends Animal {
        constructor(nome: string, especie: string, idade: number, alimentacao: string, som: string) {
            super(nome, especie, idade, alimentacao, som)
        }

        emitirSom(): string {
            return this.som
        }
    }

    class Aves extends Animal {
        migratoria: boolean

        constructor(migratoria: boolean, nome: string, especie: string, idade: number, alimentacao: string, som: string) {
            super(nome, especie, idade, alimentacao, som)
            this.migratoria = migratoria
        }

        emitirSom(): string {
            return this.som
        }
    }

    let mamiferos: Mamiferos[] = []
    let aves: Aves[] = []

    let continuar: string = "s"

    while (continuar.toLowerCase() === "s") {
        let opcao: number = Number(prompt("Qual classe deseja cadastrar?\n1 - Mamífero\n2 - Ave"))

        switch (opcao) {
            case 1: 
                let nome = String(prompt("Nome do mamífero:"))
                let especie = String(prompt("Espécie:"))
                let idade = Number(prompt("Idade:"))
                let alimentacao = String(prompt("Alimentação:"))
                let som = String(prompt("Som do animal:"))

                let novoMamifero = new Mamiferos(nome, especie, idade, alimentacao, som)
                mamiferos.push(novoMamifero)
                break
            

            case 2:
                let nomeA = String(prompt("Nome da ave:"))
                let especieA = String(prompt("Espécie:"))
                let idadeA = Number(prompt("Idade:"))
                let alimentacaoA = String(prompt("Alimentação:"))
                let somA = String(prompt("Som da ave:"))
                let respMigratoria = Number(prompt("É migratória?\n1 - Sim\n2 - Não"))
                
                let ehMigratoria = (respMigratoria === 1)

                let novaAve = new Aves(ehMigratoria, nomeA, especieA, idadeA, alimentacaoA, somA)
                aves.push(novaAve)
                break
            

            default:
                alert("Opção inválida!")
                break
        }

        continuar = String(prompt("Deseja cadastrar outro animal? (S/N)"))
    }


    console.log("======= LISTA DE MAMÍFEROS =======")
    for (let i = 0; i < mamiferos.length; i++) {
        console.log(`Nome: ${mamiferos[i].nome} | Espécie: ${mamiferos[i].especie} | Som: ${mamiferos[i].emitirSom()}`)
    }

    console.log("======= LISTA DE AVES =======")
    for (let i = 0; i < aves.length; i++) {
        console.log(`Nome: ${aves[i].nome} | Espécie: ${aves[i].especie} | Som: ${aves[i].emitirSom()}`)
    }

    alert("Cadastros finalizados! Abra o console para ver a lista.")
}