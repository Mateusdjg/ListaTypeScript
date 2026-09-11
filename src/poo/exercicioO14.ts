// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function exercicio14poo() {
    class Livro {
        titulo: string
        autor: string
        anoPublicacao: number
        disbonibilidade: boolean

        constructor(titulo: string, autor: string, anoPublicacao: number, disbonibilidade: boolean) {
            this.titulo = titulo
            this.autor = autor
            this.anoPublicacao = anoPublicacao
            this.disbonibilidade = disbonibilidade
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

    let livrosDisponiveis = false
    for(let i = 0; i < livros.length; i++){
        if(livros[i].disbonibilidade === true){
            console.log(`======= LIVROS DISPONÍVEIS NA BIBLIOTECA =======\nTítulo: ${livros[i].titulo}\nAutor: ${livros[i].autor}\nAno Publicidade: ${livros[i].anoPublicacao}`)
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

            if(livros[i].disbonibilidade){
                livros[i].disbonibilidade = false
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