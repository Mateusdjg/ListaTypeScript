// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function exercicio3r():void{
    let nome:string, horasTrabalhadas:number, salarioHora:number, sexo:string, pergunta:number = 0, somaSalarios:number = 0, maiorSalario:number = 1, nomeMS:string = "", sexoM:number = 0, sexoF:number = 0, usuarios:number = 0

    while(pergunta != 2){
        nome = prompt("Informe seu nome: ") || ""
        horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas: "))
        salarioHora = Number(prompt("Informe seu salário pro hora: "))
        sexo = (prompt("Informe seu sexo\nF - feminino\nM - Masculino\nSexo: ") || "").toUpperCase()
        if(sexo == "F"){
            sexoF++
        }
        else if(sexo == "M"){
            sexoM++
        }
        else{
            alert("Sexo ínvalido!!!")
            continue
        }
        pergunta = Number(prompt("1. Sim\n2. Não\nDeseja continuar o programa: "))
        somaSalarios = salarioHora + somaSalarios
        if(salarioHora > maiorSalario){
            maiorSalario = salarioHora
            nomeMS = nome
        }
        usuarios++
        
    }
    // USANDO MATH.ROUND
    // let percentualM:number = Math.round((sexoM *100 ) / usuarios)
    // let percentualF:number = Math.round((sexoF *100 ) / usuarios)
    
    // USANDO .TOFIXED
    let perM:number = (sexoM / usuarios) * 100
    let perF:number = (sexoF / usuarios) * 100
    let percenM:string = perM.toFixed(2)
    let percenF:string = perF.toFixed(2)
    console.log(`Salário total dos funcionários: ${somaSalarios}`)
    console.log(`Maior salário\nFuncionário: ${nomeMS}\nSalário: ${maiorSalario}`)
    console.log(`Funcionários do sexo Masculino: ${sexoM}\nFuncionários do sexo feminino: ${sexoF}`)
    // console.log(`Percentual de funcionários Homens: ${percentualM}%\nPercentual de funcionários Mulheres: ${percentualF}%`)
    console.log(`Percentual de funcionários Homens: ${percenM}%\nPercentual de funcionários Mulheres: ${percenF}%`)
}
