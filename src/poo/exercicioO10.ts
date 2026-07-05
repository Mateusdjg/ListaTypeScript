// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade

// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

class Tamagushi {
    nome:string
    fome:number
    saude:number
    idade:number
    energia:number = 100

    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
        this.fome = this.geraNumero(80, 20)
        this.saude = this.geraNumero(80, 20)
    }

    private geraNumero(max:number, min:number):number{
        return Math.floor(Math.random() * (max - min)) + min
    }

    private get humoTama(): string{
        if(this.fome <= 10 && this.saude >= 80){
            return `Feliz`
        }
        else if(this.fome >= 40 && this.saude >= 60){
            return `Normal`
        }
        else{
            return `Triste`
        }
    }

    mudarNome(novoNome:string):void{
        if (novoNome === "") {
            alert("O nome não pode ser vazio.")
        } else {
            alert("Nome alterado com sucesso!")
            this.nome = novoNome
        }
        
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
            default:
                alert("Ops! Opção inválida")
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
            default:
                alert("Ops! Opção inválida")
                break
        }

        if(this.saude > 100){
            this.saude = 100
        }
    }

    brincar(brincadeiras:number):void{
        switch (brincadeiras){
            case 1:
                alert(`${this.nome} brincou de Pula corda, e perdeu 30 de energia`)
                this.energia -= 30
                this.fome += 20
                if (this.energia < 0) {
                    this.energia = 0;
                }
                break
            case 2:
                alert(`${this.nome} brincou de Jogo da velha, e perdeu 5 de energia`)
                this.energia -= 5
                this.fome += 3
                if (this.energia < 0) {
                    this.energia = 0;
                }
                break
            case 3:
                alert(`${this.nome} brincou de Ping pong, e perdeu 20 de energia`)
                this.energia -= 20
                this.fome += 12
                if (this.energia < 0) {
                    this.energia = 0;
                }
                break
            case 4:
                alert(`${this.nome} brincou na piscina, e perdeu 35 de energia`)
                this.energia -= 35
                this.fome += 25
                if (this.energia < 0) {
                    this.energia = 0;
                }
                break
            case 5:
                alert(`${this.nome} mexeou no celular, e ganhou 10 de energia`)
                this.energia += 10 
                this.fome += 5
                if (this.energia > 100) {
                    this.energia = 100;
                }
                break
            default:
                alert("Ops! Opção inválida")
                break

            }
        
    }

    dormir():void{
        this.energia += 100
    }
    

    resultado():void{
        alert(`======= STATUS DO SEU TAMAGUSHI =======\nNome: ${this.nome}\nIdade: ${this.idade}\nHumor: ${this.humoTama}\nFome: ${this.fome}\nSaúde: ${this.saude}\nEnergia: ${this.energia}`)
    }
}

let nome:string = String(prompt("Informe o nome do seu Tamagushi: "))
let idade:number = Number(prompt("Informe a idade do seu Tamagushi: "))

let pet = new Tamagushi(nome, idade)
pet.resultado()

let op:number = 0
while(op != 7){
    op = Number(prompt("===== MENU =====\n1.Mudar nome\n2.Alimentar\n3.Curar\n4.Status\n5.Brincar\n6.Dormir\n7.Sair\nEscolha: "))
    switch (op) {
        case 1:
            let novoNome:string = String(prompt("Qual será o novo nome do seu Tamagushi?: ")).trim()
            pet.mudarNome(novoNome)
            break

        case 2:
            if(pet.fome == 0){
                alert(`${pet.nome} não esta com fome.`)
            }
            else{
                let comida:number = Number(prompt("==== COMIDAS ====\n1 - Maça\n2 - Pizza\n3 - Sushi\n4 - Uva\n5 - Hambúrguer\nEscolha: "))
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
            let brincadeiras:number = Number(prompt("======= BRINCADEIRAS =======\n1 - Pula corda\n2 - jogo da velha\n3 - ping pong\n4 - ir para a piscina\n5 - pegar o celular\nOBS: Ao brincar seu Tamagushi fica com fome.\nEscolha: "))
            pet.brincar(brincadeiras)
            break
        case 6:
            alert(`${pet.nome} foi dormir para recarregar suas energia`)
            pet.dormir()
            break
        case 7:
            alert("Até logo....")
            break

        default:
            alert("Ops! Opção inválida")
            break
    }
}