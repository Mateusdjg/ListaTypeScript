// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function exercicio15poo(): void {
    class Funcionario {
        private _nome: string

        constructor(nome: string) {
            this._nome = nome
        }

        get nome(): string {
            return this._nome
        }

        calcularSalario(): number { return 0 }
    }

    class FuncionarioHorista extends Funcionario {
        private _salarioHora: number
        private _horas: number

        constructor(salarioHora: number, horas: number, nome: string) {
            super(nome)
            this._salarioHora = salarioHora
            this._horas = horas
        }

        get salarioHora(): number {
            return this._salarioHora
        }

        get horas(): number {
            return this._horas
        }

        calcularSalario(): number {
            let salario: number = this._salarioHora * this._horas
            return salario
        }
    }

    class FuncionarioAssalariado extends Funcionario {
        private _salario: number

        constructor(salario: number, nome: string) {
            super(nome)
            this._salario = salario
        }

        get salario(): number {
            return this._salario
        }

        calcularSalario(): number {
            return this._salario
        }
    }

    let continua: string = "", nome: string = "", salarioHora: number, horas: number, salariofixo:number
    let horistas: FuncionarioHorista[] = []
    let assalariados: FuncionarioAssalariado[] = []
    while (continua.toLowerCase() != "n") {
        let tipoFuncionario: number = Number(prompt("Qual é o tipo do funcionário?\n1 - Horista\n2 - Assalariado\n--> "))
        switch (tipoFuncionario) {
            case 1:
                nome = String(prompt("Informe o nome do funcionário: "))
                salarioHora = Number(prompt(`Informe o salário que ${nome} recebe por hora: `))
                horas = Number(prompt("Informe as horas trabalhadas: "))

                let funcionario = new FuncionarioHorista(salarioHora, horas, nome)

                horistas.push(funcionario)
                break
            case 2:
                nome = String(prompt("Informe o nome do funcionário: "))
                salariofixo = Number(prompt(`Informe o salário fixo de ${nome}: `))

                let funcionarioAssalariado = new FuncionarioAssalariado(salariofixo, nome)
                assalariados.push(funcionarioAssalariado)
                break
            default:
                alert("OPÇÃO INVÁLIDA!!!")
                break

        }

        continua = String(prompt("Deseja cadastrar outro funcionário? (s/n): "))
    }

    alert("!! ABRA O CONSOLE PARA VER OS RESULTADOS !!")

    console.log("---------- SALÁRIO DOS FUNCIONÁRIOS HORISTAS ----------")
    for(let i = 0; i < horistas.length; i++){
        console.log(`Nome: ${horistas[i].nome}\nValor pago por hora: ${horistas[i].salarioHora}\nHoras trabalhadas: ${horistas[i].horas}\nSalário: ${horistas[i].calcularSalario()}`)
    }

    console.log("---------- SALÁRIO DOS FUNCIONÁRIOS ASSALARIADOS ----------")
    for(let i = 0; i < assalariados.length; i++){
        console.log(`Nome: ${assalariados[i].nome}\nSalário: ${assalariados[i].calcularSalario()}`)
    }
}