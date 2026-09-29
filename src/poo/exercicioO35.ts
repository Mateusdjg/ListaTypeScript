// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.

export function exercicio35poo(): void {
    class Paciente {
        private _nome: string
        private _cartaoSus: string

        constructor(nome: string, cartaoSus: string) {
            this._nome = nome
            this._cartaoSus = cartaoSus
        }

        get nome(): string {
            return this._nome
        }

        get cartaoSus(): string {
            return this._cartaoSus
        }

        exibirFicha(): string {
            return `Nome: ${this._nome} | Cartão SUS: ${this._cartaoSus}`
        }
    }

    class PacienteComum extends Paciente {
        constructor(nome: string, cartaoSus: string) {
            super(nome, cartaoSus)
        }
    }

    class PacientePrioritario extends Paciente {
        private _tipoPrioridade: string

        constructor(nome: string, cartaoSus: string, tipoPrioridade: string) {
            super(nome, cartaoSus)
            this._tipoPrioridade = tipoPrioridade
        }

        get tipoPrioridade(): string {
            return this._tipoPrioridade
        }

        exibirFicha(): string {
            return `PRIORITÁRIO: [${this._tipoPrioridade.toUpperCase()}] | ${super.exibirFicha()} `
        }
    }

    let filaPacientes: Paciente[] = []
    let executar: boolean = true, nome: string, cartaoSus: string, tipoPrioridade: string

    while (executar) {
        let tipo = Number(prompt("=== CONTROLE DE ATENDIMENTO - POSTO DE SAÚDE ===\nTipo de Paciente:\n1 - Paciente Comum\n2 - Paciente Prioritário\n0 - Encerrar cadastros"))

        switch (tipo) {
            case 1:
                nome = String(prompt("Nome do paciente:"))
                cartaoSus = String(prompt("Número do Cartão do SUS:"))

                if (!nome || nome.trim() === "" || !cartaoSus || cartaoSus.trim() === "") {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente\nVoltando ao início :)")
                } else {
                    let comum = new PacienteComum(nome, cartaoSus)
                    filaPacientes.push(comum)
                }
                break

            case 2:
                nome = String(prompt("Nome do paciente:"))
                cartaoSus = String(prompt("Número do Cartão do SUS:"))
                tipoPrioridade = String(prompt("Tipo de prioridade (ex: Idoso, Gestante, PCD e etc):"))

                if (!nome || nome.trim() === "" || !cartaoSus || cartaoSus.trim() === "" || !tipoPrioridade || tipoPrioridade.trim() === "") {
                    alert("Entrada inválida! Campos preenchido de forma incorreta, preencha corretamente\nVoltando ao início :)")
                } else {
                    let prioritario = new PacientePrioritario(nome, cartaoSus, tipoPrioridade)
                    filaPacientes.push(prioritario)
                }
                break

            case 0:
                alert("ENCERRANDO PROGRAMA...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    let totalPrioritarios: number = 0

    console.log(" ===== FICHAS DE ATENDIMENTO DO DIA =====")

    for (let i = 0; i < filaPacientes.length; i++) {
        console.log(`Ficha ${i + 1} --> ${filaPacientes[i].exibirFicha()}`)

        if (filaPacientes[i] instanceof PacientePrioritario) {
            totalPrioritarios++
        }
    }

    console.log(`\n ===== RESUMO DO DIA ===== \nTotal de pacientes cadastrados: ${filaPacientes.length}`)
    console.log(`Total de pacientes prioritários atendidos: ${totalPrioritarios}`)
}