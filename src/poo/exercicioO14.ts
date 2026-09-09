// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro{
    titulo:string
    autor:string
    anoPublicacao:number
    disbonibilidade:boolean

    constructor(titulo:string, autor:string, anoPublicacao:number, disbonibilidade:boolean){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.disbonibilidade = disbonibilidade
    }
}


for (let i = 0; i < 15; i++) {
    let tit: string = String(prompt(`Informe o título do livro: `))
    let aut: string = String(prompt(`Informe o autor do livro: `))
    let anoPub: number = Number(prompt(`Informe o ano de publicação do livro: `))
    let disp: string = String(prompt(`O livro tem disponibilidade (s/n)?: `))

}