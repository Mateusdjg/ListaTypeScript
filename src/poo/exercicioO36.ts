// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function exercicio36poo(): void {
    abstract class Curso {
        private _titulo: string
        private _cargaHoraria: number

        constructor(titulo: string, cargaHoraria: number) {
            this._titulo = titulo
            this._cargaHoraria = cargaHoraria
        }

        get titulo(): string {
            return this._titulo
        }

        get cargaHoraria(): number {
            return this._cargaHoraria
        }

        abstract emitirCertificado(): string
    }

    class CursoLivre extends Curso {
        constructor(titulo: string, cargaHoraria: number) {
            super(titulo, cargaHoraria)
        }

        emitirCertificado(): string {
            return `[LIBERADO] Certificado do Curso Livre '${this.titulo}' (${this.cargaHoraria}h) gerado com sucesso!`
        }
    }

    class CursoTecnico extends Curso {
        private _numeroProjeto: number
        private _notaProjeto: number

        constructor(titulo: string, cargaHoraria: number, numeroProjeto: number, notaProjeto: number) {
            super(titulo, cargaHoraria)
            this._numeroProjeto = numeroProjeto
            this._notaProjeto = notaProjeto
        }

        get numeroProjeto(): number {
            return this._numeroProjeto
        }

        get notaProjeto(): number {
            return this._notaProjeto
        }

        emitirCertificado(): string {
            if (this._notaProjeto >= 7) {
                return `[LIBERADO] Certificado do Curso Técnico '${this.titulo}' (Projeto Final nº ${this._numeroProjeto} - Nota: ${this._notaProjeto.toFixed(1)}) gerado com sucesso!`
            } else {
                return `[PENDENTE] Certificado do Curso Técnico '${this.titulo}' retido. Nota do Projeto nº ${this._numeroProjeto} foi ${this._notaProjeto.toFixed(1)} (Mínimo exigido: 7.0).`
            }
        }
    }

    let listaCursos: Curso[] = []
    let executar: boolean = true, titulo: string, cargaHoraria: number, numeroProjeto: number, notaProjeto: number

    while (executar) {
        let tipo = Number(prompt("=== PORTAL DE CURSOS ONLINE ===\nTipo de Curso Concluído:\n1 - Curso Livre\n2 - Curso Técnico\n0 - Encerrar cadastros"))

        switch (tipo) {
            case 1:
                titulo = String(prompt("Título do curso livre:"))
                cargaHoraria = Number(prompt("Carga horária (em horas):"))

                if (!titulo || titulo.trim() === "" || isNaN(cargaHoraria) || cargaHoraria <= 0) {
                    alert("Entrada inválida! Preencha todos os campos corretamente.\nVoltando ao início :)")
                } else {
                    let cursoLivre = new CursoLivre(titulo, cargaHoraria)
                    listaCursos.push(cursoLivre)
                }
                break

            case 2:
                titulo = String(prompt("Título do curso técnico:"))
                cargaHoraria = Number(prompt("Carga horária (em horas):"))
                numeroProjeto = Number(prompt("Número do projeto final:"))
                notaProjeto = Number(prompt("Nota do projeto final (0 a 10):"))

                if (!titulo || titulo.trim() === "" || isNaN(cargaHoraria) || cargaHoraria <= 0 || isNaN(numeroProjeto) || numeroProjeto <= 0 || isNaN(notaProjeto) || notaProjeto < 0 || notaProjeto > 10) {
                    alert("Entrada inválida! Verifique os dados digitados e a nota (0 a 10).\nVoltando ao início :)")
                } else {
                    let cursoTecnico = new CursoTecnico(titulo, cargaHoraria, numeroProjeto, notaProjeto)
                    listaCursos.push(cursoTecnico)
                }
                break

            case 0:
                alert("ENCERRANDO CADASTROS...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    let certificadosLiberados: number = 0
    let certificadosPendentes: number = 0

    console.log(" ===== STATUS DE EMISSÃO DOS CERTIFICADOS =====")

    for (let i = 0; i < listaCursos.length; i++) {
        console.log(`${i + 1} - ${listaCursos[i].emitirCertificado()}`)
        if (listaCursos[i] instanceof CursoLivre) {
            certificadosLiberados++
        } else if (listaCursos[i] instanceof CursoTecnico) {
            let tecnico = listaCursos[i] as CursoTecnico
            if (tecnico.notaProjeto >= 7) {
                certificadosLiberados++
            } else {
                certificadosPendentes++
            }
        }
    }

    console.log(`\n ===== RESUMO FINAL =====\nTotal de cursos cadastrados: ${listaCursos.length}\nCertificados liberados: ${certificadosLiberados}\nCertificados pendentes: ${certificadosPendentes}`)
}