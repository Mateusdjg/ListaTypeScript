// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
// possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
// que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
// ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
// informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
// registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
// recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.
// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.

export function exercicio33poo(): void {
    abstract class Obra {
        private _titulo: string
        private _autor: string
        private _diasDeAtraso: number = 0

        constructor(titulo: string, autor: string, diasDeAtraso: number) {
            this._titulo = titulo
            this._autor = autor
            this._diasDeAtraso = diasDeAtraso
        }

        get titulo(): string {
            return this._titulo
        }

        get autor(): string {
            return this._autor
        }

        get diasDeAtraso(): number {
            return this._diasDeAtraso
        }

        abstract registrarAtraso(): number | string
    }

    class LivroFisico extends Obra {
        constructor(titulo: string, autor: string, diasDeAtraso: number) {
            super(titulo, autor, diasDeAtraso)
        }

        registrarAtraso(): number {
            return this.diasDeAtraso * 2.50
        }
    }

    class ArtigoDigital extends Obra {
        constructor(titulo: string, autor: string, diasDeAtraso: number) {
            super(titulo, autor, diasDeAtraso)
        }

        registrarAtraso(): string {
            return `ADVERTÊNCIA: Devolução do artigo digital atrasada em ${this.diasDeAtraso} dia(s).`
        }
    }

    let listaObras: Obra[] = []
    let executar: boolean = true, titulo: string, autor: string, atraso: number

    while (executar) {
        let tipo = Number(prompt("Tipo da Obra Emprestada:\n1 - Livro Físico\n2 - Artigo Digital\n0 - Para encerrar sistema"))
        switch (tipo) {
            case 1:
                titulo = String(prompt("Título da obra:"))
                autor = String(prompt("Autor da obra:"))
                atraso = Number(prompt("Quantidade de dias de atraso na devolução:"))

                if (!titulo || titulo.trim() === "" || !autor || autor.trim() === "" || isNaN(atraso) || atraso < 0) {
                    alert("Entrada inválida! Digite um número maior ou igual a zero.\nVoltando ao início :)")
                } else {
                    let livro = new LivroFisico(titulo, autor, atraso)
                    listaObras.push(livro)
                }
                break

            case 2:
                titulo = String(prompt("Título da obra:"))
                autor = String(prompt("Autor da obra:"))
                atraso = Number(prompt("Quantidade de dias de atraso na devolução:"))

                if (!titulo || titulo.trim() === "" || !autor || autor.trim() === "" || isNaN(atraso) || atraso < 0) {
                    alert("Entrada inválida! Digite um número maior ou igual a zero.\nVoltando ao início :)")
                } else {
                    let artigo = new ArtigoDigital(titulo, autor, atraso)
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

    alert("Abra o console")

    let totalMultas: number = 0

    console.log(" ===== RELATÓRIO DE DEVOLUÇÕES =====")

    for (let i = 0; i < listaObras.length; i++) {
        if (typeof listaObras[i].registrarAtraso() === "number") {
            totalMultas += listaObras[i].registrarAtraso() as number
            console.log(`Livro: ${listaObras[i].titulo} | Autor: ${listaObras[i].autor} | Multa: R$ ${(listaObras[i].registrarAtraso() as number).toFixed(2)}`)
        } else {
            console.log(`Artigo: ${listaObras[i].titulo} | Autor: ${listaObras[i].autor} | ${listaObras[i].registrarAtraso()}`)
        }
    }

    console.log(`\n ===== TOTAL DE MULTAS A SER RECOLHIDO ===== \nTotal: R$ ${totalMultas.toFixed(2)}`)
}