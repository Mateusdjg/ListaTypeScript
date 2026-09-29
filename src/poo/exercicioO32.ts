// 32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos
// privados nickname e pontuacao (iniciada em zero), sendo pontuação acessível somente pelo método
// realizarMissao() — nunca diretamente. JogadorComum ganha 100 pontos por missão.
// JogadorPremium sobrescreve realizarMissao() e acumula 150 pontos (100 + 50% de bônus). O
// programa solicita ao usuário o tipo e o apelido de cada jogador. A cada rodada, o usuário informa qual
// jogador realizou uma missão. Ao final do torneio, o programa exibe a classificação completa e destaca
// quem ultrapassou 1.000 pontos.
// Requisitos mínimos:
// • pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
// • JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
// • Getter getPontuacao() para leitura controlada.
// • Loop de rodadas com condição de parada por comando do usuário.
// • Exibição final com classificação e destaque para campeões.

export function exercicio32poo(): void {
    class Jogador {
        private _nickname: string
        private _pontuacao: number = 0

        constructor(nickname: string) {
            this._nickname = nickname
        }

        get nickname(): string {
            return this._nickname
        }

        get pontuacao(): number {
            return this._pontuacao
        }

        realizarMissao(): void {
            this._pontuacao += 100
        }

        protected adicionarBonus(bonus: number): void {
            this._pontuacao += bonus
        }
    }

    class JogadorComum extends Jogador {
        constructor(nickname: string) {
            super(nickname)
        }
    }

    class JogadorPremium extends Jogador {
        constructor(nickname: string) {
            super(nickname)
        }

        realizarMissao(): void {
            super.realizarMissao()
            this.adicionarBonus(50)
        }
    }

    let listaJogadores: Jogador[] = []
    let executa: boolean = true, nickname: string

    while (executa) {
        let tipo = Number(prompt(" === JOGADOR ===\nQual jogador realizou a missão?\n1 - Jogador Comum\n2 - Jogador Premium\n0 - Encerrar programa"))

        switch (tipo) {
            case 1:
                nickname = String(prompt("Nickname:"))

                if (!nickname || nickname.trim() === "") {
                    alert("Nickname inválido!")
                    break
                }

                let jogadorComumEncontrado: Jogador | null = null
                for (let i = 0; i < listaJogadores.length; i++) {
                    if (listaJogadores[i].nickname.toLowerCase() === nickname.toLowerCase()) {
                        jogadorComumEncontrado = listaJogadores[i]
                        break
                    }
                }

                if (jogadorComumEncontrado) {
                    jogadorComumEncontrado.realizarMissao()
                } else {
                    let comum = new JogadorComum(nickname)
                    comum.realizarMissao()
                    listaJogadores.push(comum)
                }
                break

            case 2:
                nickname = String(prompt("Nickname:"))

                if (!nickname || nickname.trim() === "") {
                    alert("Nickname inválido!")
                    break
                }

                let jogadorPremiumEncontrado: Jogador | null = null
                for (let i = 0; i < listaJogadores.length; i++) {
                    if (listaJogadores[i].nickname.toLowerCase() === nickname.toLowerCase()) {
                        jogadorPremiumEncontrado = listaJogadores[i]
                        break
                    }
                }

                if (jogadorPremiumEncontrado) {
                    jogadorPremiumEncontrado.realizarMissao()
                } else {
                    let premium = new JogadorPremium(nickname)
                    premium.realizarMissao()
                    listaJogadores.push(premium)
                }
                break

            case 0:
                alert("Encerrando programa....")
                executa = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    console.log(" === RANK DE JOGADORES ===")

    for (let i = 0; i < listaJogadores.length; i++) {
        console.log(`${i + 1}º - Nickname: ${listaJogadores[i].nickname} | Pontuação: ${listaJogadores[i].pontuacao}`)
    }

    console.log(" === JOGADORES QUE ULTRAPASSARAM 1.000 PONTOS ===")

    let ultrapassou1000: boolean = false

    for (let i = 0; i < listaJogadores.length; i++) {
        if (listaJogadores[i].pontuacao > 1000) {
            console.log(`Nickname: ${listaJogadores[i].nickname} | Pontuação: ${listaJogadores[i].pontuacao}`)
            ultrapassou1000 = true
        }
    }

    if (!ultrapassou1000) {
        console.log("Nenhum jogador conseguiu 1.000 pontos.")
    }
}