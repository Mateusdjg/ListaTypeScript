// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.
export function exerciciof7():void{
    let distanciaPercorrida:number, combustivelGasto:number, capacidadeTotalTanque:number
    function funcao1(distanciaPercorrida:number, combustivelGasto:number):number{
        let consumoMedio:number = distanciaPercorrida / combustivelGasto
        return consumoMedio
    }
    function funcao2(consumo:number,capacidadeTotalTanque:number ):any{
        let percorreTanqueCheio: number = capacidadeTotalTanque * consumo
        console.log(`O carro percorre com o tanque cheio: ${percorreTanqueCheio}`)
    }

    distanciaPercorrida = Number(prompt("Informe a distância percorrida em Km: "))
    combustivelGasto = Number(prompt("Informe a quantidade de combustível gasto em L: "))
    capacidadeTotalTanque = Number(prompt("Informe a capacidade total do tanque: "))
    let consumo:number = funcao1(distanciaPercorrida, combustivelGasto)
    funcao2(consumo, capacidadeTotalTanque)
}