// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o

// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.

export function exercicio25poo(): void {
    abstract class Assinatura {
        private _email: string
        private _precoBase: number

        constructor(email: string, precoBase: number) {
            this._email = email
            this._precoBase = precoBase
        }

        get email(): string {
            return this._email
        }
        get precoBase(): number {
            return this._precoBase
        }

        abstract exibirDetalhes(): string
    }

    class AssinaturaPadrao extends Assinatura {
        constructor(email: string, precoBase: number) {
            super(email, precoBase)
        }
        exibirDetalhes(): string {
            return `2 telas simultâneas | Preço: R$ ${this.precoBase}`
        }
    }

    class AssinaturaPremium extends Assinatura {
        constructor(email: string, precoBase: number) {
            super(email, precoBase)
        }

        exibirDetalhes(): string {
            return `4 telas simultâneas + Resolução 4K | Preço: R$ ${this.precoBase}`
        }
    }

    let listaAssinaturas: Assinatura[] = []
    let email: string, precoBase: number
    while (true) {
        let tipoAssi = Number(prompt("Tipo de Assinatura\n1 - Assinatura Padrão\n2 - Assinatura Premium\n3 - Buscar por e-mail"))

        switch (tipoAssi) {
            case 1:
                email = String(prompt("E-mail:"))
                precoBase = Number(prompt("Preço Base:"))

                let assinaturaPadrao = new AssinaturaPadrao(email, precoBase)
                listaAssinaturas.push(assinaturaPadrao)
                break
            case 2:
                email = String(prompt("E-mail:"))
                precoBase = Number(prompt("Preço Base:"))

                let assinaturaPremium = new AssinaturaPremium(email, precoBase)
                listaAssinaturas.push(assinaturaPremium)
                break
            case 3:
                if (listaAssinaturas.length == 0) {
                    alert("Nenhum contrato cadastrado até o momento!")
                    continue    
                }

                let buscarEmail: string = String(prompt("E-mail a buscar"))
                let encontrou: boolean = false

                for (let i = 0; i < listaAssinaturas.length; i++) {
                    if (buscarEmail == listaAssinaturas[i].email) {
                        console.log(listaAssinaturas[i].exibirDetalhes())
                        encontrou = true
                        break
                    }
                }

                if(!encontrou){
                    alert("Nenhuma assinatura encontrada para este e-mail.")
                }
                break
            default:
                alert("Opção inválida!")
                continue
        }

        let continuar = Number(prompt("Continuar programa?\n1 - Sim\n2 - Não"))
        if (continuar === 2) {
            alert("Finalizando...")
            break
        }
        else if(continuar != 1) {
            alert("Opção inválida! Continuando cadastros... :)")
        }

    }
}