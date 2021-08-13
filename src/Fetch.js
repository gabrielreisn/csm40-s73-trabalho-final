class Fetch{
  
  static URL = "http://loja.buiar.com/?";
  
  setObjeto(obj){
    this.objeto = {
      key : "uTnWP17vM2n",
      f : "json",
      ...obj
    }
    return this;
  }

  listar(){
    const site = Fetch.URL;
    const url = this.objectToUrl()
    return fetch(site + url);
  }

  inserir(){
    const site = Fetch.URL;
    const url = this.objectToUrl()
    console.log(site + url);
    return fetch(site + url, { method : 'POST'});
  }

  remover(){
    const site = Fetch.URL;
    const url = this.objectToUrl()
    return fetch(site + url, { method : 'POST'});
  }

  alterar(){
    const site = Fetch.URL;
    const url = this.objectToUrl()
    return fetch(site + url, { method : 'POST'});
  }

  propertiesToArray = _ => {
    const array = []
    const objeto = this.objeto
    for (let column in objeto) 
      if(objeto.hasOwnProperty(column))
        array.push(`${column}=${objeto[column]}`)
    return array;
  }

  objectToUrl = _ => {
    return this.propertiesToArray().join("&")
  }
  
}

  
