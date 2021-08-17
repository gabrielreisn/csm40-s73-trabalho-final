class Pedido{
  constructor(fetch, type){
    this.id = null
    this.nome = null
    this.fetch = fetch
    this.c = type
  }
 
  setObjectToFetch(obj){
    this.fetch.setObjeto({
      ...obj,
      c: this.c,
      id : this.id,
      nome: this.nome,
      cpf: this.cpf,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      uf: this.uf,
      numero: this.numero,
      cidade: this.cidade,
    })
  }

  inserir(){
    this.setObjectToFetch({ t: "inserir" });
    return this.fetch.inserir();
  }

  remover(){
    this.setObjectToFetch({ t: "remover" });
    if(!this.id) console.log("Não foi possível remover, categoria sem ID")
    else return this.fetch.remover();
  }

  alterar(){
    this.setObjectToFetch({ t: "alterar" });
    if(!this.id) console.log("Não foi possível remover, categoria sem ID")
    else return this.fetch.alterar();
  }
}