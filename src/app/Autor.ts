export class Autor{
    public id: number;
    public nome: string;
    public email: string;

    constructor(nome: string, email: string, id?: number){
        if(id){
            this.id = id;
        }
        this.nome = nome;
        this.email = email;
    }
    
}