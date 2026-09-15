// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function exercicio14poo() {
    class Livro {
        private _titulo: string
        private _autor: string
        private _anoPublicacao: number
        private _disbonibilidade: boolean

        constructor(titulo: string, autor: string, anoPublicacao: number, disbonibilidade: boolean) {
            this._titulo = titulo
            this._autor = autor
            this._anoPublicacao = anoPublicacao
            this._disbonibilidade = disbonibilidade
        }

        get titulo():string{
            return this._titulo
        }
        get autor():string{
            return this._autor
        }
        get anoPublicacao():number{
            return this._anoPublicacao
        }
        get disponibilidade():boolean{
            return this._disbonibilidade
        }

        emprestimo(): boolean{
            if(this._disbonibilidade){
                this._disbonibilidade = false
                return true
            }
            return false
        }
    }

    let livros:Livro [] = []
    for (let i = 0; i < 2; i++) {
        let tit: string = String(prompt(`Informe o título do livro: `))
        let aut: string = String(prompt(`Informe o autor do livro: `))
        let anoPub: number = Number(prompt(`Informe o ano de publicação do livro: `))
        let disp: string = String(prompt(`O livro tem disponibilidade (s/n)?: `)).toLowerCase()
        

        let disponivel: boolean = false
        if(disp === "s"){
            disponivel = true
        }

        let novoLivro = new Livro(tit, aut, anoPub, disponivel)
        livros.push(novoLivro)
    }

    console.log("======= LIVROS DISPONÍVEIS NA BIBLIOTECA =======")
    let livrosDisponiveis = false
    for(let i = 0; i < livros.length; i++){
        if(livros[i].disponibilidade){
            console.log(`Título: ${livros[i].titulo}\nAutor: ${livros[i].autor}\nAno Publicidade: ${livros[i].anoPublicacao}`)
            livrosDisponiveis = true
        }
    }
    if(!livrosDisponiveis){
        console.log("Livros não encontrados!")
    }

    let buscaTitulo:string = String(prompt("Informe o título do livro que deseja fazer um emprestimo: "))
    let livroEncontrado = false

    for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo.toLowerCase() === buscaTitulo.toLowerCase()){
            livroEncontrado = true

            if(livros[i].emprestimo()){
                console.log(`Emprestimo do livro ${livros[i].titulo} realizado com sucesso!!!`)
            }
            else{
                console.log(`O livro ${livros[i].titulo} já foi emprestado.`)
            }
        }
    }

    if(!livroEncontrado){
        console.log("Livro não encontrado.")
    }
    alert("Abra o console para ver os resultados")
}