// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.

export function exercicio29poo(): void {
    abstract class Obras {
        totalValorMulta: number = 0
        titulo: string
        autor: string
        constructor(titulo: string, autor: string) {
            this.titulo = titulo
            this.autor = autor
        }

        abstract multa(atraso: number): number

    }
    class LivrosFisicos extends Obras {
        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }

        multa(atraso: number): number {
            return this.totalValorMulta = atraso * 2.50
        }
    }
    class ArtigosCientificos extends Obras {
        advertencias: number = 0
        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }
        multa(atraso: number): number {
            this.advertencias = atraso
            return this.totalValorMulta = 0
        }
    }

    let listaObras: Obras[] = []
    let executar: boolean = true, titulo: string, autor: string, atraso: number
    while (executar) {
        let tipo = Number(prompt("Tipo da Obra Emprestada:\n1 - Livro Físico\n2 - Artigo Ciêntifico\n0 - Para encerrar sistema"))
        switch (tipo) {
            case 1:
                titulo = String(prompt("Título da obra:"))
                autor = String(prompt("Autor da obra:"))
                atraso = Number(prompt("Quantidade de dias de atraso na devolução:"))

                if (!titulo || titulo.trim() === "" || !autor || autor.trim() === "" || isNaN(atraso) || atraso < 0) {
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio :)")
                }
                else {
                    let livro = new LivrosFisicos(titulo, autor)
                    livro.multa(atraso)
                    listaObras.push(livro)
                }
                break
            case 2:
                titulo = String(prompt("Título da obra:"))
                autor = String(prompt("Autor da obra:"))
                atraso = Number(prompt("Quantidade de dias de atraso na devolução:"))

                if (!titulo || titulo.trim() === "" || !autor || autor.trim() === "" || isNaN(atraso) || atraso < 0) {
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio :)")
                }
                else {
                    let artigo = new ArtigosCientificos(titulo, autor)
                    artigo.multa(atraso)
                    listaObras.push(artigo)
                }
                break
            case 0:
                alert("ENCERRANDO PROGRAMA...")
                executar = false
                break
            default:
                alert("Opção inválida!")
                break
        }
    }

    let totalMultas: number = 0
    for(let i = 0; i<listaObras.length; i++){
        totalMultas += listaObras[i].totalValorMulta
    }
    console.log(` ===== TOTAL DE MULTAS ===== \nTotal: ${totalMultas.toFixed(2)}`)
}