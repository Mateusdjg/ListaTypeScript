// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

export function exerciciof9():void{
    function solicitar_renda_mensal():number{
        let renda:number = Number(prompt("Informe a sua renda: "))
        if(renda <= 0){
            alert("Valor negativo ou zero. TENTE NOVAMENTE!")
            while(true){
                renda = Number(prompt("Informe a sua renda: "))
                if(renda > 0){
                    break
                }
            }
            return renda
        }
        else{
            return renda
        }
    }
    function analisar_credito(rendaUsuario:number, valor_parcela:number):boolean{
        let limite: number = rendaUsuario * 0.3
        if(rendaUsuario > 5000){
            limite = limite + 500
        }
        
        if(valor_parcela <= limite){
            return true
        }
        else{
            return false
        }
    }
    function exibir_status(resultado:boolean):any{
        if(resultado == true){
            console.log("Crédito Aprovado")
        }
        else{
            console.log("Crédito Negado")
        }
    }

    
    let rendaUsuario:number = solicitar_renda_mensal()
    let valor_parcela:number = Number(prompt("Informe o valor das parcelas: "))
    let resultado:boolean = analisar_credito(rendaUsuario, valor_parcela)
    exibir_status(resultado)
}