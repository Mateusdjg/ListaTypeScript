// 31. O projeto socioambiental "Flor&ser" abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
// Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
// deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
// subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
// descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
// média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
// polimorfismo.

// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.

export function exercicio31poo():void{
    abstract class Projeto {
        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(titulo:string, coordenador:string, nota:number){
            this._titulo = titulo
            this._coordenador = coordenador
            this._nota = nota
        }

        get nota():number{
            return this._nota
        }

        set nota(valor:number){
            if(valor < 0 || valor > 10){
                alert("Valor inválido!!!")
            }else{
                this._nota = valor
            }
        }

        abstract descricaoCategoria():void

        abstract calculodeMedia():number
    }

    class projetoVerde extends Projeto{
        constructor(titulo:string, coordenador:string, nota:number){
            super(titulo, coordenador, nota)
        }
        public descricaoCategoria():void{
            
        }
        public calculodeMedia():number{
            let contador=0, medeia=0, acum=0, op=0
            op = Number(prompt("Informe um valor -1 para sair: "))
            while(op != 0){
                
            }
            return
        }
    }
    class projetoCultural extends Projeto{
        constructor(titulo:string, coordenador:string, nota:number){
            super(titulo, coordenador, nota)
        }
        public descricaoCategoria():void{

        }
    }
}