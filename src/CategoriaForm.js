class CategoriaForm{

  constructor(loja){
    this.campoId = document.getElementById("id_categoria")
    this.campoNome = document.getElementById("nome_categoria")
    this.loja = loja
    this.lastCategoria = null;
  }

  clearForm(){
    this.campoId.value = null
    this.campoNome.value = null
  }

  async update(){
    const id = document.getElementById("id_categoria").value
    const nome = document.getElementById("nome_categoria").value
    const categorias = this.loja.categorias()
    const categoria = await categorias.getCategoria(id)
    categoria.nome = nome
    categoria.alterar()
  }

  async delete(){
    const id = document.getElementById("id_categoria").value
    const categorias = this.loja.categorias()
    const categoria = await categorias.getCategoria(id)
    categoria.remover()
  }

  async insert(){
    const categorias = this.loja.categorias()
    const categoria = categorias.createCategoria()
    categoria.nome = this.campoNome.value
    const response = await categoria.inserir()
    const json = await response.json()
    categoria.id = json.dados.id
    return categoria
  }

  async getFormAndAction(){
    await this.update()
    return this.lastCategoria
  }

  async carregarObjeto(id){
    const categorias = this.loja.categorias()
    const categoria = await categorias.getCategoria(id)
    this.campoId.value = categoria.id
    this.campoNome.value = categoria.nome
  }
}