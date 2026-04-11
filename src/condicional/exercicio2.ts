// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
export function exercicio2():void{
    let mes:number = Number(prompt("Informe um número entre 1 e 12 para saber a estação do ano: "))
    if(mes == 1){
        console.log("A estação do ano correspondente ao mês 1 é Verão")
    }
    else if(mes == 2){
        console.log("A estação do ano correspondente ao mês 2 é Verão")
    }
    else if(mes == 3){
        console.log("A estação do ano correspondente ao mês 3 é Verão")
    }
    else if(mes == 4){
        console.log("A estação do ano correspondente ao mês 4 é Outono")
    }
    else if(mes == 5){
        console.log("A estação do ano correspondente ao mês 5 é Outono")
    }
    else if(mes == 6){
        console.log("A estação do ano correspondente ao mês 6 é Outono")
    }
    else if(mes == 7){
        console.log("A estação do ano correspondente ao mês 7 é Inverno")
    }
    else if(mes == 8){
        console.log("A estação do ano correspondente ao mês 8 é Inverno")
    }
    else if(mes == 9){
        console.log("A estação do ano correspondente ao mês 9 é Inverno")
    }
    else if(mes == 10){
        console.log("A estação do ano correspondente ao mês 10 é Primavera")
    }
    else if(mes == 11){
        console.log("A estação do ano correspondente ao mês 11 é Primavera")
    }
    else if(mes == 12){
        console.log("A estação do ano correspondente ao mês 12 é Primavera")
    }
}
