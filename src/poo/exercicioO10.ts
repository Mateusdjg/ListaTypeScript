// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade

class Tamagushi {
    nome:string
    fome:number
    saude:number
    humor:number
    idade:number

    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
        this.humor = this.geraNumero(1,3)
        this.fome = this.geraNumero(80, 20)
        this.saude = this.geraNumero(80, 20)
    }

    private geraNumero(max:number, min:number):number{
        return Math.floor(Math.random() * (max - min)) + min
    }

    mudarNome(novoNome:string):string{
        return this.nome = novoNome
    }

    alimentar(comida:number){
        switch (comida){
            case 1:
                this.fome -= 15
                alert(`${this.nome} foi alimentado!`)
                break
            case 2:
                this.fome -= 40
                alert(`${this.nome} foi alimentado!`)
                break
            case 3:
                this.fome -= 30
                alert(`${this.nome} foi alimentado!`)
                break
            case 4:
                this.fome -= 10
                alert(`${this.nome} foi alimentado!`)
                break
            case 5:
                this.fome -= 50
                alert(`${this.nome} foi alimentado!`)
                break
        }
        
        if(this.fome < 0){
            this.fome = 0
        }
    }

    curar(remedio:number):void{
        switch(remedio){
            case 1:
                this.saude += 10
                break

            case 2:
                this.saude += 20
                break

            case 3:
                this.saude += 30
                break
        }

        if(this.saude > 100){
            this.saude = 100
        }
    }
    

    resultado():void{
        alert(`======= STATUS DO SEU TAMAGUSHI =======\nNome: ${this.nome}\nIdade: ${this.idade}\nHumor: ${this.humor}\nFome: ${this.fome}\nSaúde: ${this.saude}`)
    }
}

let nome:string = String(prompt("Informe o nome do seu Tamagushi: "))
let idade:number = Number(prompt("Informe a idade do seu Tamagushi: "))

let pet = new Tamagushi(nome, idade)
pet.resultado()

let op:number = 0
while(op != 5){
    op = Number(prompt("===== MENU =====\n1.Mudar nome\n2.Alimentar\n3.Curar\n4.Status\n5.Sair\nEscolha: "))
    switch (op) {
        case 1:
            let novoNome:string = String(prompt("Qual será o novo nome do seu Tamagushi?: "))
            pet.mudarNome(novoNome)
            alert("Nome alterado com sucesso!!!")
            break

        case 2:
            if(pet.fome == 0){
                alert(`${pet.nome} não esta com fome.`)
            }
            else{
                let comida:number = Number(prompt("==== COMIDAS ====\n1. Maça\n2. Pizza\n3. Sushi\n4. Uva\n5. Hambúrguer\nEscolha: "))
                pet.alimentar(comida)
            }
            break

        case 3:
            let remedio:number = Number(prompt("==== RÉMEDIOS ====\n1 - Curativo\n2 - Xarope\n3 - Injeção\nEscolha:  "))
            pet.curar(remedio)
            break

        case 4:
            pet.resultado()
            break

        case 5:
            alert("Até logo....")
            break

        default:
            alert("Ops! Opção inválida")
            break
    }
}