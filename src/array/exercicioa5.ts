// 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function exercicioa5():void{
    let tarefas:string[] = []
    function adicionar():any{
        let tarefa:string = prompt("Qual tarefa deseja adicionar: ")!
        if(!isNaN(Number(tarefa))){
            alert("Entrada ínvalida")
        }
        else{
            tarefas.push(tarefa.toLowerCase())
        }
    }
    function concluir():any{
        let remover:string = prompt("Qual tarefa deseja concluir: ")!
        let posicao = tarefas.indexOf(remover.toLowerCase())
        if(posicao !== -1){
            tarefas.splice(posicao, 1)
            alert("Tarefa removido com sucesso")
        }
        else{
            alert("Tarefa não encontrado")
        }        
    }
    function exibir():any{
        if(tarefas.length == 0){
            alert("Sem item na lista")
        }
        else{
            alert(`TAREFAS: ${tarefas}`)
        }
    }

    function gerenciar_tarefas():any{
        let op:number = 0
        while(op != 4){
            op = Number(prompt("===== ORGANIZADOR DE TAREFAS DIÁRIAS ====\n1. Adicionar\n2. Concluír\n3. Exibir\n4. Sair\nEscolha: "))
        switch(op){
            case 1:
                adicionar()
                break

            case 2:
                concluir()
                break

            case 3:
                exibir()
                break

            case 4:
                alert("Encerrando...")
                break

            default:
                alert("Opção invalida!")
        }
        }
    }
    gerenciar_tarefas()
}