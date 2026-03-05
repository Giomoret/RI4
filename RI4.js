class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = []
    }

    getCpf() {
        return this.#cpf
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    detalhe() {
        let info = "Nome: " + this.nome + "\n"
        info += "Estado: " + this.endereco.estado +
                " cidade: " + this.endereco.cidade +
                " rua: " + this.endereco.rua +
                " numero: " + this.endereco.numero + "\n"
        this.telefones.forEach(t => {
            info += "ddd: " + t.ddd + " numero: " + t.numero + "\n"
        })
        return info
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = []
        this.clientes = []
    }

    getCnpj() {
        return this.#cnpj
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
    }

    detalhe() {
        let info = "Razão Social: " + this.razaoSocial + "\n"
        info += "Nome fantasia: " + this.nomeFantasia + "\n"
        info += "------------------\n"
        this.clientes.forEach(c => {
            info += c.detalhe() + "\n"
        })
        return info
    }
}

let endEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 1000)
let empresa = new Empresa("ABC LTDA", "Mercado Livre", "12345678000199", endEmpresa)
//xsqdl
let cliente1 = new Cliente("João Paulo", "2222222222222",
new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987))
cliente1.adicionarTelefone(new Telefone("12345678", "12345678"))
cliente1.adicionarTelefone(new Telefone("12345678", "12345678"))
empresa.adicionarCliente(cliente1)

let cliente2 = new Cliente("Gabriel L.", "11111111111",
new Endereco("SP", "São José dos Campos", "Av Andrômeda", 412))
cliente2.adicionarTelefone(new Telefone("87654321", "87654321"))
cliente2.adicionarTelefone(new Telefone("87654321", "87654321"))
empresa.adicionarCliente(cliente2)

let cliente3 = new Cliente("Emmanuel G.", "33333333333",
new Endereco("SP", "São José dos Campos", "Av São João", 789))
cliente3.adicionarTelefone(new Telefone("12312312", "12312312"))
cliente3.adicionarTelefone(new Telefone("12312312", "12312312"))
empresa.adicionarCliente(cliente3)

let cliente4 = new Cliente("Gustavo B.", "44444444444",
new Endereco("SP", "São José dos Campos", "Av Andrômeda", 452))
cliente4.adicionarTelefone(new Telefone("32132132", "32132132"))
cliente4.adicionarTelefone(new Telefone("32132132", "32132132"))
empresa.adicionarCliente(cliente4)

console.log(empresa.detalhe())