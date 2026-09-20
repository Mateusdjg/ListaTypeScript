// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function exercicio17poo(): void{

    abstract class Usuarios {
        private _indentificador: number
        private _nome: string

        constructor(indentificador: number, nome:string){
            this._indentificador = indentificador
            this._nome = nome
        }

        get indentificador(): number{
            return this._indentificador
        }

        get nome(): string{
            return this._nome
        }

        abstract indetificar():void
    }

    class Aluno extends Usuarios {
        curso: string

        constructor(indentificador: number, nome:string, curso: string){
            super(indentificador, nome)
            this.curso = curso
        }
        
        indetificar(): void{
            return console.log(`Aluno: ${this.nome} | Curso: ${this.curso}`)
        }
    }

    class Servidores extends Usuarios {
        departamento: string

        constructor(indentificador:number, nome:string, departamento: string){
            super(indentificador, nome)
            this.departamento = departamento
        }

        indetificar() {
            return console.log(`Servido: ${this.nome} | Departamento: ${this.departamento}`)
        }
    }

    let historico: Usuarios[] = []
    let op:string = "s", id: number, nome:string, contadorAluno: number = 0, contadorServidor: number = 0
    while(op.toLowerCase() != "n"){
        let cadastrar: number = Number(prompt("Cadastrar aluno ou servidor?\n1 - Aluno\n2 - Servidor"))
        switch (cadastrar){
            case 1:
                id = Number(prompt("Id"))
                nome = String(prompt("Nome"))
                let curso: string = String(prompt("Curso matriculado"))

                let aluno = new Aluno(id, nome, curso)

                historico.push(aluno)
                contadorAluno++
                op = String(prompt("Deseja cadastrar outro usuário?[ s | n ]"))
                break
            case 2:
                id = Number(prompt("Id"))
                nome = String(prompt("Nome"))
                let departamento: string = String(prompt("Departamento"))

                let servidor = new Servidores(id, nome, departamento)

                historico.push(servidor)
                contadorServidor++
                op = String(prompt("Deseja cadastrar outro usuário?[ s | n ]"))
                break
            default:
                alert("Opção inválida")
                break
        }
    }
    console.log("==== USUÁRIOS ====")
    for(let i = 0; i<historico.length; i++){
        historico[i].indetificar() 
    }
    console.log(`Total de Alunos: ${contadorAluno} | Total de Servidores: ${contadorServidor}`)

}