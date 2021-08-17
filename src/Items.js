class Items{
  constructor(fetch){
    this.t = "listar" 
    this.c = "item"
    this.fetch = fetch
    this.setObjectToFetch()
  }

  setObjectToFetch(){
    this.fetch.setObjeto({
      t: this.t,
      c: this.c
    })
  }

  createItem(){
    return new Item(new Fetch(), this.c)
  }

  getItem(id){
    return this.getLista().then(array => array.find(obj => obj.id == id))
  }
 

  
  getPedidos(id){
    return this.getLista().then(array => array.filter(obj => obj.pedido == id))
  }

  getLista(){
    return this.fetch
      .listar()
      .then(response => response.json())
      .then(json => json.dados.map(element => {
        return Object.assign(this.createItem(), element)
      }));
  }

  listar(){
    this.getLista().then(console.log);
  }
  
}