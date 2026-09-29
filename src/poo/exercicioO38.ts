// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.

export function exercicio38poo(): void {
    class Cliente {
        private _nome: string
        private _email: string
        private _saldoCashback: number = 0

        constructor(nome: string, email: string) {
            this._nome = nome
            this._email = email
        }

        get nome(): string {
            return this._nome
        }

        get email(): string {
            return this._email
        }

        get saldoCashback(): number {
            return this._saldoCashback
        }

        protected adicionarCashback(valor: number): void {
            this._saldoCashback += valor
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.01
            this.adicionarCashback(cashback)
        }
    }

    class ClientePadrao extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }
    }

    class ClienteVIP extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.05
            this.adicionarCashback(cashback)
        }
    }

    let listaClientes: Cliente[] = []
    let executar: boolean = true, nome: string, email: string, valorCompra: number

    while (executar) {
        let tipo = Number(prompt("=== LOJA VIRTUAL ===\n1 - Cliente Padrão\n2 - Cliente VIP\n0 - Sair"))

        switch (tipo) {
            case 1:
                nome = String(prompt("Nome:"))
                email = String(prompt("E-mail:"))
                valorCompra = Number(prompt("Valor da compra:"))

                if (!nome || nome.trim() === "" || !email || email.trim() === "" || isNaN(valorCompra) || valorCompra <= 0) {
                    alert("Entrada inválida!")
                } else {
                    let clienteEncontrado: Cliente | null = null
                    for (let i = 0; i < listaClientes.length; i++) {
                        if (listaClientes[i].email.toLowerCase() === email.toLowerCase()) {
                            clienteEncontrado = listaClientes[i]
                            break
                        }
                    }

                    if (clienteEncontrado) {
                        clienteEncontrado.processarCompra(valorCompra)
                    } else {
                        let cliente = new ClientePadrao(nome, email)
                        cliente.processarCompra(valorCompra)
                        listaClientes.push(cliente)
                    }
                }
                break

            case 2:
                nome = String(prompt("Nome:"))
                email = String(prompt("E-mail:"))
                valorCompra = Number(prompt("Valor da compra:"))

                if (!nome || nome.trim() === "" || !email || email.trim() === "" || isNaN(valorCompra) || valorCompra <= 0) {
                    alert("Entrada inválida!")
                } else {
                    let clienteEncontrado: Cliente | null = null
                    for (let i = 0; i < listaClientes.length; i++) {
                        if (listaClientes[i].email.toLowerCase() === email.toLowerCase()) {
                            clienteEncontrado = listaClientes[i]
                            break
                        }
                    }

                    if (clienteEncontrado) {
                        clienteEncontrado.processarCompra(valorCompra)
                    } else {
                        let vip = new ClienteVIP(nome, email)
                        vip.processarCompra(valorCompra)
                        listaClientes.push(vip)
                    }
                }
                break

            case 0:
                alert("ENCERRANDO PROGRAMA...")
                executar = false
                break

            default:
                alert("Opção inválida!")
                break
        }
    }

    alert("Abra o console")
    let totalCashback: number = 0

    console.log(" ===== RELATÓRIO DE CASHBACK =====")

    for (let i = 0; i < listaClientes.length; i++) {
        totalCashback += listaClientes[i].saldoCashback
        console.log(`Cliente: ${listaClientes[i].nome} | E-mail: ${listaClientes[i].email} | Cashback: R$ ${listaClientes[i].saldoCashback.toFixed(2)}`)
    }

    console.log(`Total concedido: R$ ${totalCashback.toFixed(2)}`)
}