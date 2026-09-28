// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.

export function exercicio27poo(): void {
    abstract class Equipamentos {
        tombamento: number
        descricao: string

        constructor(tombamento: number, descricao: string) {
            this.tombamento = tombamento
            this.descricao = descricao
        }

        abstract fichaTecnica(): string
    }

    class Computador extends Equipamentos {
        memoriaRam: number
        constructor(tombamento: number, descricao: string, memoriaRam: number) {
            super(tombamento, descricao)
            this.memoriaRam = memoriaRam
        }

        fichaTecnica(): string {
            return `Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Memória Ram: ${this.memoriaRam}`
        }
    }

    class Roteador extends Equipamentos {
        qtdPortas: number
        constructor(tombamento: number, descricao: string, qtdPortas: number) {
            super(tombamento, descricao)
            this.qtdPortas = qtdPortas
        }

        fichaTecnica(): string {
            return `Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Quantidade de portas: ${this.qtdPortas}`
        }
    }

    let inventario: Equipamentos[] = []
    let executar: boolean = true, tombamento: number, descricao: string
    while (executar) {
        let tipo: number = Number(prompt("Tipo de equipamento a cadastrar[0 - Para encerrar]:\n1 - Computador\n2 - Roteador"))
        switch (tipo) {
            case 1:
                tombamento = Number(prompt("Informe o tombamento do equipamento:"))
                descricao = String(prompt("Descrição:"))
                let memoriaRam = Number(prompt("Quantidade de memória ram(em GB):"))
                if (isNaN(tombamento) || tombamento <= 0 || !descricao || descricao.trim() === "" || descricao === "null" || isNaN(memoriaRam) || memoriaRam <= 0){
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio")
                    continue
                } else {
                    let computador = new Computador(tombamento, descricao, memoriaRam)
                    inventario.push(computador)
                }
                break
            case 2:
                tombamento = Number(prompt("Informe o tombamento do equipamento:"))
                descricao = String(prompt("Descrição:"))
                let qntportas = Number(prompt("Quantidade de portas:"))
                if (isNaN(tombamento) || tombamento <= 0 || !descricao || descricao.trim() === "" || descricao === "null" || isNaN(qntportas) || qntportas <= 0) {
                    alert("Entrada inválida! Digite um número maior que zero.\nVoltando ao ínicio")
                } else {
                    let roteador = new Roteador(tombamento, descricao, qntportas)
                    inventario.push(roteador)
                }
                break
            case 0:
                alert("Encerrando...")
                executar = false
                break
            default:
                alert("Opção inválida!")
                break
        }
    }
    alert("Abra o console")
    console.log(" ==== EQUIPAMENTOS ==== ")
    for(let i = 0; i<inventario.length; i++){
        console.log(inventario[i].fichaTecnica())
    }
}