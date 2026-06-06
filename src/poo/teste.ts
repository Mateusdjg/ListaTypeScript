class User {
    name:string
    email:string
    active: boolean = false
    constructor(name: string, email:string, active:boolean = false){
        this.name = name
        this.email = email
        this.active = active
    }

}

let carlos = new User('Carlos', 'calos@gmail.com')
let maria = new User('Maria', 'maria@gmail.com', true)
let fernanda = new User('Fernanda', 'calos@gmail.com')
console.log(carlos)
console.log(maria)
console.log(fernanda)