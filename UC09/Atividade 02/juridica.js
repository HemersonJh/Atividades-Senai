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

class Juridica extends Pessoa {
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial) {
        super(pNome, pEndereco);
        this.Cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial
    }

    get Cnpj() {
        return this.Cnpj
    };
    set Cnpj(pCnpj) {
        this.cnpj = pCnpj
    };

    get RazaoSocial() {
        return this.razaoSocial
    };
    set RazaoSocial(pRazaoSocial) {
        this.razaoSocial = pRazaoSocial
    };

    toString() {
        let retorno = super.toString();
        retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razaoSocial}`;
        return retorno;
    }

}

var juridica = new Juridica("Sungsam", "Via dos Celulares", "147851475", "Celulares novos e usados");
console.log(juridica.toString());