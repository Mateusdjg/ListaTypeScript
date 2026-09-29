// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo. O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.

export function exercicio45poo(): void {
    class UsuarioSistema {
        private _login: string
        private _senha: string = ""

        constructor(login: string, senhaInicial: string) {
            this._login = login
            this.senha = senhaInicial
        }

        get login(): string {
            return this._login
        }

        get senha(): string {
            return this._senha
        }

        set senha(novaSenha: string) {
            if (novaSenha.length < 6) {
                alert("Erro de Segurança: A senha deve ter pelo menos 6 caracteres.")
            } else if (novaSenha === this._login) {
                alert("Erro de Segurança: A senha não pode ser igual ao login.")
            } else {
                this._senha = novaSenha
                alert("Senha cadastrada/alterada com sucesso!")
            }
        }
    }

    let login: string, senhaTentativa: string
    let executar: boolean = true

    login = String(prompt("=== CADASTRAR USUÁRIO ===\nDigite o seu login:"))

    while (!login || login.trim() === "") {
        alert("Login inválido! O login não pode ficar em branco.")
        login = String(prompt("=== CADASTRAR USUÁRIO ===\nDigite o seu login:"))
    }

    login = login.trim()

    let usuario = new UsuarioSistema(login, "")

    while (executar) {
        senhaTentativa = String(prompt(`Usuário: ${usuario.login}\n\nDigite uma senha segura:\n- Pelo menos 6 caracteres\n- Não pode ser igual ao login`))

        if (!senhaTentativa) {
            alert("Senha não pode ser vazia.")
        } else {
            usuario.senha = senhaTentativa
            if (usuario.senha !== "") {
                executar = false 
            }
        }
    }

    alert("Abra o console")
    console.log(` ===== CADASTRO CONCLUÍDO COM SUCESSO =====\nLogin: ${usuario.login}\nStatus do cadastro: Ativo e seguro`)
}