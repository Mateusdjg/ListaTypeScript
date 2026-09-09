// 13. Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function exercicio13poo(): void{
    class Aluno {
        nome:string
        nota1:number
        nota2:number

        constructor(nome:string, nota1:number, nota2:number){
            this.nome = nome
            this.nota1 = nota1
            this.nota2 = nota2
        }

        media(): number{
            let media: number
            media = (this.nota1 + this.nota2) / 2
            return media
        }

        status(): any{
            if (this.media() <= 7){
                alert(`REPROVADO!!`)
            }
            else{
                alert(`APROVADO!!`)
            }
        }
    }

    let nome: string = String(prompt(`Insira o nome do aluno: `))
    let nota1: number = Number(prompt(`Insira a nota 1 do aluno: `))
    let nota2: number = Number(prompt(`Insira a nota 2 do aluno: `))

    let aluno = new Aluno(nome, nota1, nota2)

    aluno.media()
    aluno.status()
}