// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.
export function exerciciof4():void{
    let notas50:number = 0
    let notas20:number = 0
    let notas10:number = 0
    function saque(valor_sacar:number):void{
        while(valor_sacar != 0){
            if(valor_sacar >= 50){
                valor_sacar = valor_sacar - 50
                notas50++
            }
            else if(valor_sacar >= 20){
                valor_sacar = valor_sacar - 20
                notas20++
            }
            else if(valor_sacar >= 10){
                valor_sacar = valor_sacar - 10
                notas10++
            }
        }
        console.log(`Notas de 50: ${notas50}`)
        console.log(`Notas de 20: ${notas20}`)
        console.log(`Notas de 10: ${notas10}`)
    }
    let valor_sacar:number = Number(prompt("Informe o valor a sacar: "))
    saque(valor_sacar)
}