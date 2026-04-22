// 2. O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a
// temperatura.
// ● Crie uma função ler_temperatura():
// o Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura
// (valor inteiro ou float).
// o Retorna a temperatura lida.
// ● Crie uma função verificar_alerta_temperatura(temperatura):
// o Recebe a temperatura.
// o Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// o Caso contrário, retorna False.
// ● Crie uma função emitir_mensagem_alerta(status_alerta):
// o Recebe o status_alerta (True ou False).
// o Se status_alerta for True, imprime &quot;ALERTA: Temperatura fora da faixa ideal!&quot;.
// o Se status_alerta for False, imprime &quot;Temperatura dentro da faixa normal.&quot;.

export function exerciciof2():void{
    function ler_temperatura():number{
        let temperatura:number = Number(prompt("Informe a temperatura: "))
        return temperatura
    }

    function verificar_alerta_temperatura(funcaoTem:number):boolean{
        if(funcaoTem < 10 || funcaoTem > 30){
            return true
        }
        else{
            return false
        }
    }

    function emitir_mensagem_alerta(verificar_alerta_temperatura:boolean):void{
        if(verificar_alerta_temperatura == true){
            console.log("ALERTA: Temperatura fora da faixa ideal!")
        }
        else if(verificar_alerta_temperatura == false){
            console.log("Temperatura dentro da faixa normal")
        }
    }


    let funcaoTem:number = ler_temperatura()
    //verificar_alerta_temperatura(funcaoTem)
    let funcaoVerifar:boolean = verificar_alerta_temperatura(funcaoTem)
    emitir_mensagem_alerta(funcaoVerifar)
}
