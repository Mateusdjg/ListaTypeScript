// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

export function exercicio23poo(): void {

    abstract class Produto {
        private _codigo: number
        private _nome: string
        private _precoCusto: number

        constructor(codigo: number, nome: string, precoCusto: number) {
            this._codigo = codigo
            this._nome = nome
            this._precoCusto = precoCusto
        }

        get codigo(): number {
            return this._codigo
        }

        get nome(): string {
            return this._nome
        }

        get precoCusto(): number {
            return this._precoCusto
        }

        abstract calcularPrecoFinal(dataHoje: string): number
    }

    class ProdutoPerecivel extends Produto {
        private _dataValidade: string

        constructor(codigo: number, nome: string, precoCusto: number, dataValidade: string) {
            super(codigo, nome, precoCusto)
            this._dataValidade = dataValidade
        }

        get dataValidade(): string {
            return this._dataValidade
        }

        calcularPrecoFinal(dataHoje: string): number {
            if (this._dataValidade === dataHoje) {
                // Aplica 30% de desconto caso esteja no dia do vencimento
                return this.precoCusto * 0.70
            }
            return this.precoCusto
        }
    }

    class ProdutoNaoPerecivel extends Produto {
        constructor(codigo: number, nome: string, precoCusto: number) {
            super(codigo, nome, precoCusto)
        }

        calcularPrecoFinal(dataHoje: string): number {
            // Produtos não perecíveis não sofrem alteração de valor
            return this.precoCusto
        }
    }

    let estoque: Produto[] = []
    let op: string = "s", codigo: number, nome: string, precoCusto: number

    // Cadastro de produtos no estoque pelo gerente
    while (op.toLowerCase() !== "n") {
        let tipoProduto: number = Number(prompt("Cadastrar Produto:\n1 - Produto Perecível\n2 - Produto Não Perecível"))

        switch (tipoProduto) {
            case 1:
                codigo = Number(prompt("Código do produto"))
                nome = String(prompt("Nome do produto"))
                precoCusto = Number(prompt("Preço de custo"))
                let dataValidade: string = String(prompt("Data de validade (formato: DD/MM/AAAA)"))

                let produtoPerecivel = new ProdutoPerecivel(codigo, nome, precoCusto, dataValidade)
                estoque.push(produtoPerecivel)
                break

            case 2:
                codigo = Number(prompt("Código do produto"))
                nome = String(prompt("Nome do produto"))
                precoCusto = Number(prompt("Preço de custo"))

                let produtoNaoPerecivel = new ProdutoNaoPerecivel(codigo, nome, precoCusto)
                estoque.push(produtoNaoPerecivel)
                break

            default:
                alert("Opção inválida!!!")
                break
        }

        op = String(prompt("Cadastrar mais um produto no estoque? [ s | n ]"))
    }

    // Simulação da passagem do caixa
    let simularCaixa: string = "s"
    let dataAtual: string = String(prompt("Informe a data de hoje para o caixa (formato: DD/MM/AAAA)"))

    while (simularCaixa.toLowerCase() !== "n") {
        let codigoBusca: number = Number(prompt("Passagem do Caixa - Digite o código do produto:"))
        let encontrado: boolean = false

        for (let i = 0; i < estoque.length; i++) {
            if (estoque[i].codigo === codigoBusca) {
                encontrado = true
                let precoFinal: number = estoque[i].calcularPrecoFinal(dataAtual)

                alert(`==== CAIXA ====\nProduto: ${estoque[i].nome}\nPreço Base: R$ ${estoque[i].precoCusto.toFixed(2)}\nValor Final a Pagar: R$ ${precoFinal.toFixed(2)}`)
                break
            }
        }

        if (!encontrado) {
            alert("Produto não encontrado no estoque!")
        }

        simularCaixa = String(prompt("Passar outro produto no caixa? [ s | n ]"))
    }
}