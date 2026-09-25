// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

export function exercicio22poo(): void {

    abstract class Veiculo {
        private _placa: string
        private _quilometragemAtual: number

        constructor(placa: string, quilometragemAtual: number) {
            this._placa = placa
            this._quilometragemAtual = quilometragemAtual
        }

        get placa(): string {
            return this._placa
        }

        get quilometragemAtual(): number {
            return this._quilometragemAtual
        }

        set quilometragemAtual(novaKm: number) {
            this._quilometragemAtual = novaKm
        }

        abstract precisaManutencao(): boolean
    }

    class Onibus extends Veiculo {
        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }

        precisaManutencao(): boolean {
            return this.quilometragemAtual % 10000 === 0 || this.quilometragemAtual >= 10000
        }
    }

    class Ambulancia extends Veiculo {
        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }

        precisaManutencao(): boolean {
            return this.quilometragemAtual % 5000 === 0 || this.quilometragemAtual >= 5000
        }
    }

    let frota: Veiculo[] = []
    let op: string = "s", placa: string, quilometragem: number

    while (op.toLowerCase() !== "n") {
        let tipoVeiculo: number = Number(prompt("Cadastrar Veículo:\n1 - Ônibus\n2 - Ambulância"))

        switch (tipoVeiculo) {
            case 1:
                placa = String(prompt("Placa do Ônibus")).toUpperCase()
                quilometragem = Number(prompt("Quilometragem atual"))

                let onibus = new Onibus(placa, quilometragem)
                frota.push(onibus)
                break
            case 2:
                placa = String(prompt("Placa da Ambulância")).toUpperCase()
                quilometragem = Number(prompt("Quilometragem atual"))

                let ambulancia = new Ambulancia(placa, quilometragem)
                frota.push(ambulancia)
                break
            default:
                alert("Opção inválida!!!")
                break
        }

        op = String(prompt("Cadastrar mais um veículo? [ s | n ]"))
    }

    let consultarOutro: string = "s"
    while (consultarOutro.toLowerCase() !== "n") {
        let placaBusca: string = String(prompt("Informe a placa do veículo para verificação de manutenção:")).toUpperCase()
        let encontrado: boolean = false

        for (let i = 0; i < frota.length; i++) {
            if (frota[i].placa === placaBusca) {
                encontrado = true
                let kmAtualizada: number = Number(prompt(`Veículo localizado! Informe a quilometragem atual do veículo ${frota[i].placa}:`))
                frota[i].quilometragemAtual = kmAtualizada

                if (frota[i].precisaManutencao()) {
                    alert(`ATENÇÃO: O veículo de placa ${frota[i].placa} PRECISA ser retido imediatamente para manutenção!`)
                } else {
                    alert(`O veículo de placa ${frota[i].placa} está com a manutenção em dia. Liberado para circulação.`)
                }
                break
            }
        }

        if (!encontrado) {
            alert("Veículo não encontrado na frota cadastrada!")
        }

        consultarOutro = String(prompt("Deseja consultar outro veículo? [ s | n ]"))
    }
}