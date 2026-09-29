// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.

export function exercicio41poo(): void {
    class Encomenda {
        private _pesoKg: number
        private _cidadeDestino: string

        constructor(pesoKg: number, cidadeDestino: string) {
            this._pesoKg = pesoKg
            this._cidadeDestino = cidadeDestino
        }

        get pesoKg(): number {
            return this._pesoKg
        }

        get cidadeDestino(): string {
            return this._cidadeDestino
        }

        calcularFrete(): number {
            return this._pesoKg * 10.00
        }
    }

    class EncomendaPadrao extends Encomenda {
        constructor(pesoKg: number, cidadeDestino: string) {
            super(pesoKg, cidadeDestino)
        }
    }

    class EncomendaExpressa extends Encomenda {
        constructor(pesoKg: number, cidadeDestino: string) {
            super(pesoKg, cidadeDestino)
        }

        calcularFrete(): number {
            return this.pesoKg * 20.00
        }
    }

    let listaEncomendas: Encomenda[] = []
    let totalFreteExpresso: number = 0
    let executar: boolean = true, pesoKg: number, cidadeDestino: string

    while (executar) {
        let tipo = Number(prompt("=== GERENCIADOR DE ENCOMENDAS CORREIOS ===\nTipo de Envio:\n1 - Encomenda Padrão\n2 - Encomenda Expressa\n0 - Encerrar cadastros"))

        switch (tipo) {
            case 1:
                cidadeDestino = String(prompt("Cidade de destino:"))
                pesoKg = Number(prompt("Peso da encomenda [em kg]:"))

                if (!cidadeDestino || cidadeDestino.trim() === "" || isNaN(pesoKg) || pesoKg <= 0) {
                    alert("Entrada inválida! Preencha os campos corretamente.")
                } else {
                    let padrao = new EncomendaPadrao(pesoKg, cidadeDestino)
                    listaEncomendas.push(padrao)
                }
                break

            case 2:
                cidadeDestino = String(prompt("Cidade de destino:"))
                pesoKg = Number(prompt("Peso da encomenda [em kg]:"))

                if (!cidadeDestino || cidadeDestino.trim() === "" || isNaN(pesoKg) || pesoKg <= 0) {
                    alert("Entrada inválida! Preencha os campos corretamente.")
                } else {
                    let expressa = new EncomendaExpressa(pesoKg, cidadeDestino)
                    listaEncomendas.push(expressa)
                    totalFreteExpresso += expressa.calcularFrete()
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
    console.log(" ===== RELATÓRIO DE ENCOMENDAS PROCESSADAS =====")

    for (let i = 0; i < listaEncomendas.length; i++) {
        let encomenda = listaEncomendas[i]
        let tipoTexto = encomenda instanceof EncomendaExpressa ? "Expressa" : "Padrão"

        console.log(`Encomenda ${i + 1} [${tipoTexto}] | Destino: ${encomenda.cidadeDestino} | Peso: ${encomenda.pesoKg} kg | Valor Frete: R$ ${encomenda.calcularFrete().toFixed(2)}`)
    }

    console.log(`\n ===== RESUMO DAS TAXAS ===== \nTotal de encomendas cadastradas: ${listaEncomendas.length}\nTotal acumulado em fretes expressos: R$ ${totalFreteExpresso.toFixed(2)}`)
}