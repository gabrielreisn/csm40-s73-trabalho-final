class Pedidos{
  constructor(fetch){
    this.t = "listar" 
    this.c = "pedido"
    this.fetch = fetch
    this.setObjectToFetch()
  }

  setObjectToFetch(){
    this.fetch.setObjeto({
      t: this.t,
      c: this.c
    })
  }

  createPedido(){
    return new Pedido(new Fetch(), this.c)
  }

  getPedido(id){
    return this.getLista().then(array => array.find(obj => obj.id == id))
  }

  getLista(){
    return this.fetch
      .listar()
      .then(response => response.json())
      .then(json => json.dados.map(element => {
        return Object.assign(this.createPedido(), element)
      }));
  }

  listar(){
    this.getLista().then(console.log);
  }
  
}