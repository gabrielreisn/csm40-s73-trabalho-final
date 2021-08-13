class Produtos{
  constructor(fetch){
    this.t = "listar" 
    this.c = "produto"
    this.fetch = fetch
    this.setObjectToFetch()
  }

  setObjectToFetch(){
    this.fetch.setObjeto({
      t: this.t,
      c: this.c
    })
  }

  createProduto(){
    return new Produto(new Fetch(), this.c)
  }

  getProduto(id){
    return this.getLista().then(array => array.find(obj => obj.id == id))
  }

  getLista(){
    return this.fetch
      .listar()
      .then(response => response.json())
      .then(json => json.dados.map(element => {
        return Object.assign(this.createProduto(), element)
      }));
  }

  listar(){
    this.getLista().then(console.log);
  }
  
}