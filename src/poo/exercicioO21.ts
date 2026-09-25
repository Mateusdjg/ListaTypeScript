// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest

// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function exercicio21poo(): void {
    class Projeto {
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
        set nota(novaNota: number) {
            if (novaNota >= 0 && novaNota <= 10) {
                this._nota = novaNota
            }
            else {
                alert("Nota inválida! A nota deve estar entre 0 e 10. Definido para 0 por padrão.")
                this._nota = 0
            }

        }
    }

    class ProjetoVerde extends Projeto {
        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }
    }

    class ProjetoCultural extends Projeto {
        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }
    }

    let projetos: Projeto[] = []
    let continuar: string = "s", titulo: string, coordenador: string, nota: number

    while (continuar.toLowerCase() != "n") {
        let tipo = Number(prompt("1 - Projeto Verde\n2 - Projeto Cultural"))
        switch (tipo) {
            case 1:
                titulo = String(prompt("Título do projeto:"));
                coordenador = String(prompt("Nome do coordenador:"))
                nota = Number(prompt("Nota do projeto (0 a 10):"))

                let projetoVerde = new ProjetoVerde(titulo, coordenador, nota)
                projetos.push(projetoVerde)
                break
            case 2:
                titulo = String(prompt("Título do projeto:"))
                coordenador = String(prompt("Nome do coordenador:"))
                nota = Number(prompt("Nota do projeto (0 a 10):"))

                let projetoCultural = new ProjetoCultural(titulo, coordenador, nota)
                projetos.push(projetoCultural)
                break
            default:
                alert("Opção inválida!")
                break
        }
        continuar = String(prompt("Deseja cadastrar outro projeto? [s/n]"))
    }
    let somaNotas: number = 0;

    for (let i = 0; i < projetos.length; i++) {
        somaNotas += projetos[i].nota;
    }

    let mediaGeral: number = 0;
    if (projetos.length > 0) {
        mediaGeral = somaNotas / projetos.length;
    }

    let relatorio: string = `Média Geral do Concurso: ${mediaGeral.toFixed(2)}\n\n--- PROJETOS DESTAQUE (Ordem Inversa) ---\n`;

    for (let i = projetos.length - 1; i >= 0; i--) {
        if (projetos[i].nota > mediaGeral) {
            relatorio += `Projeto: ${projetos[i].titulo} | Coordenador: ${projetos[i].coordenador} | Nota: ${projetos[i].nota}\n`;
        }
    }

    alert(relatorio)
}