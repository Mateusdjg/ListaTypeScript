// 31. O projeto socioambiental "Flor&ser" abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
// Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
// deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
// subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
// descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
// média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
// polimorfismo.

// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.

export function exercicio31poo(): void {
    abstract class Projeto {
        private _titulo: string
        private _coordenador: string
        private _nota: number = 0

        constructor(titulo: string, coordenador: string, nota: number) {
            this._titulo = titulo
            this._coordenador = coordenador
            this.nota = nota
        }

        get titulo(): string {
            return this._titulo
        }

        get coordenador(): string {
            return this._coordenador
        }

        get nota(): number {
            return this._nota
        }

        set nota(valor: number) {
            if (valor < 0 || valor > 10 || isNaN(valor)) {
                alert("Nota inválida! Digite um valor entre 0 e 10.")
            } else {
                this._nota = valor
            }
        }

        abstract descricaoCategoria(): string
    }

    class ProjetoVerde extends Projeto {
        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Projeto Verde (Plantio Urbano)"
        }
    }

    class ProjetoCultural extends Projeto {
        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Projeto Cultural (Conscientização)"
        }
    }

    let listaProjetos: Projeto[] = []
    let executar: boolean = true
    let titulo: string, coordenador: string, nota: number

    while (executar) {
        let tipo: number = Number(prompt("Tipo do Projeto:\n1 - Projeto Verde\n2 - Projeto Cultural\n0 - Sair"))

        switch (tipo) {
            case 1:
                titulo = String(prompt("Título:"))
                coordenador = String(prompt("Coordenador:"))
                nota = Number(prompt("Nota (0 a 10):"))

                if (!titulo || titulo.trim() === "" || !coordenador || coordenador.trim() === "" || isNaN(nota) || nota < 0 || nota > 10) {
                    alert("Dados inválidos! Digite novamente.")
                } 
                else {
                    listaProjetos.push(new ProjetoVerde(titulo, coordenador, nota))
                    alert("Projeto Verde cadastrado!")
                }
                break

            case 2:
                titulo = String(prompt("Título:"))
                coordenador = String(prompt("Coordenador:"))
                nota = Number(prompt("Nota (0 a 10):"))

                if (!titulo || titulo.trim() === "" || !coordenador || coordenador.trim() === "" || isNaN(nota) || nota < 0 || nota > 10) {
                    alert("Dados inválidos! Digite novamente.")
                } 
                else {
                    listaProjetos.push(new ProjetoCultural(titulo, coordenador, nota))
                    alert("Projeto Cultural cadastrado!")
                }
                break

            case 0:
                alert("Encerrando programa...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    if (listaProjetos.length > 0) {
        let somaNotas = listaProjetos.reduce((total, p) => total + p.nota, 0)
        let mediaGeral = somaNotas / listaProjetos.length

        console.log(`Média Geral: ${mediaGeral.toFixed(2)}`)
        console.log("=== PROJETO(S) ACIMA DA MÉDIA ===")

        for (let projeto of listaProjetos) {
            if (projeto.nota > mediaGeral) {
                console.log(`Título: ${projeto.titulo} | Categoria: ${projeto.descricaoCategoria()} | Nota: ${projeto.nota}`)
            }
        }
    } else {
        console.log("Nenhum projeto foi cadastrado.")
    }
}