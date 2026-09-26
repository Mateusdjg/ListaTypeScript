// 24. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas.

//  Uma tarefa genérica possui uma descrição e o status de concluída (booleano).

// Uma Tarefa Acadêmica inclui o nome da disciplina associada, 

// enquanto uma Tarefa Pessoal inclui o nível de prioridade. 

// O programa deve abrir um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array unificado.
//  Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.

export function exercicio24poo(): void {
    class Tarefa {
        private _descricao: string
        private _concluida: boolean = false

        constructor(descricao: string) {
            this._descricao = descricao
        }

        concluir(): void {
            this._concluida = true
        }

        verificarConcluida(): boolean {
            return this._concluida
        }

        exibir(): string {
            let status = this._concluida ? "|CONCLUÍDA|" : "|PENDENTE|"
            return `${status} ${this._descricao}`
        }
    }

    class TarefaAcademica extends Tarefa{
        private _disciplina: string

        constructor(descricao: string, disciplina: string){
            super(descricao)
            this._disciplina = disciplina
        }

        exibir(): string {
            return `${super.exibir()}  |  Disciplina: ${this._disciplina}`
        }
    }

    class TarefaPessoal extends Tarefa{
        prioridade: string

        constructor(descricao: string, prioridade: string){
            super(descricao)
            this.prioridade = prioridade
        }

        exibir(): string {
            return `${super.exibir()}  |  Prioridade: ${this.prioridade}`
        }
    }

    let listaTarefas: Tarefa[] = []
    let executar: number = 1, descricao: string
    while(executar != 0){
        executar = Number(prompt("==== TAREFAS ====\n1 - Nova Tarefa Acadêmica\n2 - Nova Tarefa Pessoal\n3 - Concluir Tarefa\n4 - Acadêmicas Pedentes\n0 - Sair"))

        switch (executar) {
            case 1:
                descricao = String(prompt("Descrição da tarefa:"))
                let disciplina = String(prompt("Disciplina:"))

                let tarefaAcademica = new TarefaAcademica(descricao, disciplina)
                listaTarefas.push(tarefaAcademica)
                break
            case 2:
                descricao = String(prompt("Descrição da tarefa:"))
                let prioridade: string = String(prompt("Prioridade[B - Baixa | M - Média | A - Alta]")).toUpperCase()

                let tarefaPessoal = new TarefaPessoal(descricao, prioridade)
                listaTarefas.push(tarefaPessoal)
                break
            case 3:
                alert("ABRA O CONSOLE PARA VISUALIZAR AS TAREFAS")
                console.log(" ==== TAREFA PARA CONCLUIR ====")
                for(let i = 0; i<listaTarefas.length; i++){
                    console.log(`${i + 1} - ${listaTarefas[i].exibir()}`)
                }
                let tarefa: number = Number(prompt("Digite o número da tarefa:"))
                let indice: number = tarefa - 1

                if(indice < listaTarefas.length && indice >= 0){
                    listaTarefas[indice].concluir()
                    alert("Tarefa Concluida")
                }
                else{
                    alert("Número da tarefa inválido")
                }
                break
            case 4:
                console.log(" ==== TAREFAS ACADÊMICAS PEDENTES ====")

                for(let tarefa of listaTarefas){
                    if(tarefa instanceof TarefaAcademica && !tarefa.verificarConcluida()){
                        console.log(tarefa.exibir())
                    }
                }

        }
    }

}