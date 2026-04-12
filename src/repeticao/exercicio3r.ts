// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

let nome:string, horasTrabalhadas:number, salarioHora:number, sexo:string, pergunta:number = 0, somaSalarios:number = 0, maiorSalario:number = 1, nomeMS:string, sexoM:number = 0, sexoF:number = 0

while(pergunta != 2){
    nome = prompt("Informe seu nome: ") || ""
    horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas: "))
    salarioHora = Number(prompt("Informe seu salário pro hora: "))
    sexo = prompt("Informe seu sexo: ") || ""
    pergunta = Number(prompt("1. Sim\n2. Não\nDeseja continuar o programa: "))
    somaSalarios = salarioHora + somaSalarios
    if(salarioHora > maiorSalario){
        maiorSalario = salarioHora
        nomeMS = nome
    }
    sexoM++
    sexoF++
    
}