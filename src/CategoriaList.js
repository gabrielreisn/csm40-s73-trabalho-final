class CategoriaList{
  
  constructor(divId){
    this.dados = null;
    this.divResult = divId;
  }

  delete(id){
    const element = document.querySelector(`#categoria_${id}`)
    element.remove()
  }

  update(dado){
    const element = document.querySelector(`#categoria_${dado.id}`)
    const lista = document.querySelector("#lista_categorias")
    const newElement = this.getListInfo(dado)
    newElement.addEventListener("click", async () => {
      await this.categoria.carregarObjeto(dado.id)
      this.openModalUpdate()
    })
    lista.replaceChild(newElement, element)
  }

  push(dado){
    const divResult = document.getElementById(this.divResult);
    divResult.className = "list-main"
    divResult.appendChild(this.getListInfo(dado));
  }

  pushArray(dados){
    this.dados = dados
  }

  render(){
    const divResult = document.getElementById(this.divResult);
    divResult.innerHTML = null
    divResult.className = "list-main"
    this.dados.forEach(dado => {
      const elementHTML = this.getListInfo(dado)
      elementHTML.addEventListener("click", async () => {
        await this.categoria.carregarObjeto(dado.id)
        this.openModalUpdate()
      })
      divResult.appendChild(elementHTML);
    })
  }

  getListInfo(dado){
    const div = document.createElement('div')
    const image = document.createElement('img')
    const paragraph = document.createElement('p')
    div.id = "categoria_" + dado.id
    div.className = "list"
    image.src = "img/default.jpg"
    image.className = "imagem"
    paragraph.className = "nome"
    paragraph.innerHTML = dado.nome
    div.appendChild(image)
    div.appendChild(paragraph)
    return div;
  }

  setCategoria(categoria){
    this.categoria = categoria
  }

  setOpenModal(callback){
    this.openModal = callback
  }
  
  setOpenModalUpdate(callback){
    this.openModalUpdate = callback
  }
}