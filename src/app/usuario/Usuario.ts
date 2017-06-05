export class Usuario{
    public id: number = null;
    public nome:string;
    public email:string;
    public senha:string;
    public endereco:string;
    public telefone:string;

    constructor(email?:string, senha?:string, nome?:string, endereco?:string, telefone?:string, id?:number){
        if(email){
            this.email = email;
        }
        if(senha){
            this.senha = senha;
        }
        if(nome){
            this.nome = nome;
        }
        
        if(endereco){
            this.endereco = endereco;
        }
        if(telefone){
            this.telefone = telefone;
        }
        if(id){
            this.id = id;
        }
        

    }
}