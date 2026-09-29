// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra
// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.

export function exercicio44poo(): void {
    class Chamado {
        private _id: number
        private _descricaoEquipamento: string
        private _laboratorio: string
        private _concluido: boolean

        constructor(id: number, descricaoEquipamento: string, laboratorio: string) {
            this._id = id
            this._descricaoEquipamento = descricaoEquipamento
            this._laboratorio = laboratorio
            this._concluido = false
        }

        get id(): number {
            return this._id
        }

        get descricaoEquipamento(): string {
            return this._descricaoEquipamento
        }

        get laboratorio(): string {
            return this._laboratorio
        }

        get concluido(): boolean {
            return this._concluido
        }

        finalizarChamado(): void {
            this._concluido = true
        }
    }

    let listaChamados: Chamado[] = []
    let executar: boolean = true, descricao: string, laboratorio: string, idBusca: number
    let idContador: number = 1

    while (executar) {
        let opcao = Number(prompt(`=== SUPORTE TÉCNICO - CADASTRO DE CHAMADOS ===\nChamados registrados: ${listaChamados.length}\n\n1 - Cadastrar novo chamado\n0 - Finalizar cadastros`))

        switch (opcao) {
            case 1:
                descricao = String(prompt("Descrição do equipamento[problema]:"))
                laboratorio = String(prompt("Laboratório[Lugar]:"))

                if (!descricao || descricao.trim() === "" || !laboratorio || laboratorio.trim() === "") {
                    alert("Entrada inválida! Preencha todas as informações.")
                } else {
                    let chamado = new Chamado(idContador, descricao.trim(), laboratorio.trim())
                    listaChamados.push(chamado)
                    idContador++
                }
                break

            case 0:
                alert("FINALIZANDO CADASTROS...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    if (listaChamados.length > 0) {
        executar = true

        while (executar) {
            let opcao = Number(prompt(`=== RESOLUÇÃO DE CHAMADOS ===\n\n1 - Marcar chamado como CONCLUÍDO\n0 - Encerrar`))

            switch (opcao) {
                case 1:
                    idBusca = Number(prompt("Digite o ID do chamado resolvido:"))

                    if (isNaN(idBusca) || idBusca <= 0) {
                        alert("ID inválido!")
                    } else {
                        let encontrado: boolean = false

                        for (let i = 0; i < listaChamados.length; i++) {
                            if (listaChamados[i].id === idBusca) {
                                encontrado = true
                                if (listaChamados[i].concluido) {
                                    alert(`O chamado ID #${idBusca} já esta concluído!`)
                                } else {
                                    listaChamados[i].finalizarChamado()
                                    alert(`Chamado ID #${idBusca} marcado como CONCLUÍDO`)
                                }
                                break
                            }
                        }

                        if (!encontrado) {
                            alert(`Chamado com ID #${idBusca} não foi encontrado.`)
                        }
                    }
                    break

                case 0:
                    alert("ENCERRANDO...")
                    executar = false
                    break

                default:
                    alert("Opção inválida!")
                    break
            }
        }
    }

    alert("Abra o console")
    console.log(" ===== RELATÓRIO DE MANUTENÇÃO - SUPORTE TÉCNICO =====")

    let atendidos: number = 0, pendentes: number = 0

    for (let i = 0; i < listaChamados.length; i++) {
        if (listaChamados[i].concluido) {
            atendidos++
        } else {
            pendentes++
        }
        
        let status = listaChamados[i].concluido ? "CONCLUÍDO" : "PENDENTE"
        console.log(`[ID #${listaChamados[i].id}] - Equipamento: ${listaChamados[i].descricaoEquipamento} | Lab: ${listaChamados[i].laboratorio} | Status: ${status}`)
    }

    console.log(`\nTotal de chamados registrados: ${listaChamados.length}\nChamados Atendidos (Concluídos): ${atendidos}\nChamados Pendentes: ${pendentes}`)
}