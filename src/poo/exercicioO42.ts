// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.

export function exercicio42poo(): void {
    class Medicamento {
        private _nome: string
        private _lote: string
        private _preco: number
        private _quantidadeEstoque: number

        constructor(nome: string, lote: string, preco: number, quantidadeEstoque: number) {
            this._nome = nome
            this._lote = lote
            this._preco = preco
            this._quantidadeEstoque = quantidadeEstoque
        }

        get nome(): string {
            return this._nome
        }

        get lote(): string {
            return this._lote
        }

        get preco(): number {
            return this._preco
        }

        get quantidadeEstoque(): number {
            return this._quantidadeEstoque
        }

        set quantidadeEstoque(quantidade: number) {
            if (quantidade >= 0) {
                this._quantidadeEstoque = quantidade
            } else {
                this._quantidadeEstoque = 0
            }
        }
    }

    let listaMedicamentos: Medicamento[] = []
    let nome: string, lote: string, preco: number, quantidadeEstoque: number

    for (let i = 0; listaMedicamentos.length < 10; i++) {
        let opcao = Number(prompt(`=== CONTROLE DE ESTOQUE - FARMÁCIA ===\nMedicamentos cadastrados: ${listaMedicamentos.length}/10\n1 - Cadastrar Medicamento\n0 - Finalizar cadastros`))

        if (opcao === 0) {
            alert("ENCERRANDO CADASTROS...")
            break
        }

        switch (opcao) {
            case 1:
                nome = String(prompt("Nome do medicamento:"))
                lote = String(prompt("Número do lote:"))
                preco = Number(prompt("Preço unitário [R$]:"))
                quantidadeEstoque = Number(prompt("Quantidade em estoque:"))

                if (!nome || nome.trim() === "" || !lote || lote.trim() === "" || isNaN(preco) || preco <= 0 || isNaN(quantidadeEstoque) || quantidadeEstoque < 0) {
                    alert("Entrada inválida! Digite informações válidas e valores não negativos.")
                } else {
                    let medicamento = new Medicamento(nome, lote, preco, quantidadeEstoque)
                    listaMedicamentos.push(medicamento)
                }
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    console.log(" ===== MEDICAMENTOS EM ESTOQUE CRÍTICO =====")

    let totalCriticos: number = 0
    for (let i = 0; i < listaMedicamentos.length; i++) {
        if (listaMedicamentos[i].quantidadeEstoque < 5) {
            console.log(`- Nome: ${listaMedicamentos[i].nome} | Lote: ${listaMedicamentos[i].lote} | Quantidade Restante: ${listaMedicamentos[i].quantidadeEstoque} unidade(s)`)
            totalCriticos++
        }
    }

    if (totalCriticos === 0) {
        console.log("Nenhum medicamento está em nível crítico de estoque.")
    }

    console.log(`\nTotal de medicamentos verificados: ${listaMedicamentos.length}`)
}