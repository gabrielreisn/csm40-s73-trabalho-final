class Categorias{
  constructor(fetch){
    this.t = "listar" 
    this.c = "categoria"
    this.fetch = fetch
    this.setObjectToFetch()
  }

  setObjectToFetch(){
    this.fetch.setObjeto({
      t: this.t,
      c: this.c
    })
  }

  createCategoria(){
    return new Categoria(new Fetch(), this.c)
  }

  getCategoria(id){
    return this.getLista().then(array => array.find(obj => obj.id == id))
  }

  getLista(){
    return this.fetch
      .listar()
      .then(response => response.json())
      .then(json => json.dados.map(element => {
        return Object.assign(this.createCategoria(), element)
      }));
  }

  listar(){
    this.getLista().then(console.log);
  }
  
}