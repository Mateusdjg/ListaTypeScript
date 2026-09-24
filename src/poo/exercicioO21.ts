// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest

// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function exercicio21poo():void {
    class Projeto {
        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(titulo: string, coordenador: string, nota: number){
            this._titulo =  titulo
            this._coordenador = coordenador
            this._nota = nota
        }

        get titulo():string {
            return this._titulo
        }
        get coordenador(): string{
            return this._coordenador
        }
        get nota(): number{
            return this._nota
        }
        set nota(novaNota: number){
            this._nota = novaNota
        }
    }
}