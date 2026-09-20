// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade "°C" e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de "atm" e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function exercicio19poo(): void{

    abstract class Sensor {
        private _id: number
        private _leitura: number

        constructor(id:number, leitura:number){
            this._id = id
            this._leitura = leitura
        }

        get id(): number{
            return this._id
        }
        get leitura(): number{
            return this._leitura
        }

        abstract alerta(): boolean

        abstract exibirLeitura(): string
    }

    class SensorTemperatura extends Sensor{
        constructor(id:number, leitura:number){
            super(id, leitura)
        }

        alerta(): boolean {
            return this.leitura > 40
        }

        exibirLeitura(): string {
            return (`${this.leitura}°C`)
        }
    }

    class SensorPressao extends Sensor {
        constructor(id:number, leitura:number){
            super(id, leitura)
        }

        alerta(): boolean {
            return this.leitura > 5
        }
        exibirLeitura(): string {
            return (`${this.leitura} atm`)
        }
    }

    let sensores: Sensor[] = []
    let op: string = "s", id:number, leitura:number

    while(op.toLowerCase() != "n"){
        let tipo: number = Number(prompt("Tipo do sensor\n1 - Temperatura\n2 - Pressão"))
        switch (tipo){
            case 1:
                id = Number(prompt("Código do sensor"))
                leitura = Number(prompt("Valor da leitura"))

                let sensorTem = new SensorTemperatura(id, leitura)
                sensores.push(sensorTem)

                op = String(prompt("Cotinuar[ s | n ]"))
                break
            case 2:
                id = Number(prompt("Código do sensor"))
                leitura = Number(prompt("Valor da leitura"))

                let sensorPre = new SensorPressao(id, leitura)
                sensores.push(sensorPre)

                op = String(prompt("Cotinuar[ s | n ]"))
                break
            default:
                alert("Opção inválida!")
                break
        }
    }
    console.log("===== RELATÓRIO DE SENSORES EM PERIGO =====")
    for(let i = 0; i<sensores.length; i++){
        if(sensores[i].alerta()){
            console.log(`ALERTA: Sensor ${sensores[i].id} | Leitura: ${sensores[i].exibirLeitura()}`)
        }
    }
}