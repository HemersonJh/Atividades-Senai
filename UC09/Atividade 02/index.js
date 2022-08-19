class Pessoa {
    constructor(pNome, pEndereco) {
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome() {
        return this.nome
    };
    set Nome(pNome) {
        this.nome = pNome
    };

    get Endereco() {
        return this.Endereco
    };
    set Endereco(pEndereco) {
        this.endereco = pEndereco
    };

    toString() {
        return `Nome: ${this.nome} \nEndereco: ${this.endereco}`;
    }
}

class Fisica extends Pessoa {
    constructor(pNome, pEndereco, pCpf, pDtNascimento) {
        super(pNome, pEndereco);
        this.Cpf = pCpf;
        this.Endereco = pEndereco;
        this.DtNascimento = pDtNascimento
    }

    get Cpf() {
        return this.Cpf
    };
    set Cpf(pCpf) {
        this.cpf = pCpf
    };

    get DtNascimento() {
        return this.dtNascimento
    };
    set DtNascimento(pDtNascimento) {
        this.dtNascimento = pDtNascimento
    };

    toString() {
        let retorno = super.toString();
        retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dtNascimento}`;
        return retorno;
    }

}


//*var pessoa = new Pessoa("Luiz", "Rua dos Bobos");
//console.log(pessoa.toString());

var fisica = new Fisica("Luisa", "Rua das Marias", "12345678910", "15/07/1978");
console.log(fisica.toString());