export class Usuario{
    public id: number = null;
    public nomeCompleto:string;
    public email:string;
    public senha:string;
    public endereco:string;
    public telefone:string;

    constructor(email:string, senha:string, nomeCompleto?:string, endereco?:string, telefone?:string, id?:number){
        this.email = email;
        this.senha = senha;
        if(nomeCompleto){
            this.nomeCompleto = nomeCompleto;
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