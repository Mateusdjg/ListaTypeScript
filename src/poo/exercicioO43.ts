// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).

export function exercicio43poo(): void {
    class Atleta {
        private _nome: string
        private _idade: number
        private _tempoMinutos: number

        constructor(nome: string, idade: number, tempoMinutos: number) {
            this._nome = nome
            this._idade = idade
            this._tempoMinutos = tempoMinutos
        }

        get nome(): string {
            return this._nome
        }

        get idade(): number {
            return this._idade
        }

        get tempoMinutos(): number {
            return this._tempoMinutos
        }
    }

    let listaAtletas: Atleta[] = []
    let executar: boolean = true, nome: string, idade: number, tempoMinutos: number

    while (executar) {
        nome = String(prompt(`=== AVALIAÇÃO DE DESEMPENHO DE ATLETAS ===\nAtletas cadastrados: ${listaAtletas.length}\n\nDigite o NOME do atleta [ou 'SAIR' para finalizar]:`))

        if (!nome || nome.trim().toUpperCase() === "SAIR") {
            alert("ENCERRANDO CADASTROS...")
            executar = false
        } else {
            idade = Number(prompt(`Idade de ${nome}:`))
            tempoMinutos = Number(prompt(`Tempo de prova de ${nome} (em minutos):`))

            if (isNaN(idade) || idade <= 0 || isNaN(tempoMinutos) || tempoMinutos <= 0) {
                alert("Entrada inválida! Digite idade e tempo válidos maiores que zero.")
            } else {
                let atleta = new Atleta(nome.trim(), idade, tempoMinutos)
                listaAtletas.push(atleta)
            }
        }
    }

    alert("Abra o console")
    console.log(" ===== RELATÓRIO DA MARATONA =====")

    if (listaAtletas.length === 0) {
        console.log("Nenhum atleta foi cadastrado.")
    } else {
        let campeao: Atleta = listaAtletas[0]

        for (let i = 1; i < listaAtletas.length; i++) {
            if (listaAtletas[i].tempoMinutos < campeao.tempoMinutos) {
                campeao = listaAtletas[i]
            }
        }

        console.log(`Total de atletas participantes: ${listaAtletas.length}\nCAMPEÃO DA PROVA\nNome: ${campeao.nome}\nIdade: ${campeao.idade} anos\nTempo: ${campeao.tempoMinutos} minutos`)
    }
}