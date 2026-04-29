// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
//  ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
//  ● Permitir que o usuário apresente todos os itens da lista.
//  ● Permitir que o usuário apresente quantos itens há na lista.
//  ● Permitir que o usuário remova itens da lista.

export function exercicioa3():void{
    let listaCompras:string [] = []

    function adicionar():any{
            let item:string = String(prompt("Informe o item a ser adicionado a lista: "))
            if(listaCompras.indexOf(item) !== -1){
                alert("Esse item ja esta na lista")
            }
            else{
                listaCompras.push(item)
                alert("Item adicionado com sucesso")
                
            }
            
    }
    function verificarItens():any{
        alert(`Lista de itens: ${listaCompras}`)
    }
    function quantidadeItens():any{
        alert(`Quantidade de itens: ${listaCompras.length}`)
    }
    function removerItens():any{
        let remover:string = String(prompt("Qual item deseja remover: "))
        let posicao:number = listaCompras.indexOf(remover)

        if(posicao !== -1){
            listaCompras.splice(posicao, 1)
            alert("Item removido com sucesso")
        }
        else{
            alert("Item não encontrado")
        }
    }
    function gerar_lista_compras():any{
        let op:number = 0
        while(op != 5){

            op = Number(prompt("=== GERADOR DE LISTA DE COMPRAS ===\n1. Adicionar\n2. Verificar itens\n3. Qauntidades de itens\n4. Remover item\n5. Sair\nEscolha: "))

            switch(op){
                case 1:
                    adicionar()
                    break
                
                case 2:
                    verificarItens()
                    break
                
                case 3:
                    quantidadeItens()
                    break
                
                case 4:
                    removerItens()
                    break

                case 5:
                    alert("Encerrando...")
                    break

                default:
                    alert("OPÇÃO INVÁLIDA!")
            }

    }
    }
    gerar_lista_compras()
}


