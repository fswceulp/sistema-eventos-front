export class Evento {
  public id : number;
  public nome : string;
  public sigla : string;
  public inicio : string;
  public termino : string;
  public url : string;
  public cidade : string;
  public estado : string;
  public local : string;

  // constructor(id: number, nome: string, sigla: string) {
  //   this.id = id;
  //   this.nome = nome;
  //   this.sigla = sigla;
  // }
  constructor(id: number, nome: string, sigla: string, inicio?: string, termino?: string, url?: string, cidade?: string, estado?: string, local?: string){
    this.id = id;
    this.nome = nome;
    this.sigla = sigla;
    if(inicio){
      this.inicio = inicio;
    }
    if(termino){
      this.termino = termino;
    }
    if(url){
      this.url = url;
    }
    if(cidade){
      this.cidade = cidade;
    }
    if(estado){
      this.estado = estado;
    }
    if(local){
      this.local = local;
    }
  }
}
