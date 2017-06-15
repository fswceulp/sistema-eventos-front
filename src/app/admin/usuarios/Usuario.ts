export class Usuario {
    public nome: string;
    public email: string;
    public senha: string;
    public endereco: string;
    public telefone:  string;
    public id: number;

    constructor(nome: string, email: string, senha: string, endereco: string, telefone: string, id: number) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.id = id;
    }
}
