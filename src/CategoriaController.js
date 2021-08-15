class CategoriaController{
  constructor({ categoria, categoriaForm, categoriaLista }){
    this.categorias = categorias
    this.categoriaForm = categoriaForm
    this.categoriaLista = categoriaLista
    this.init()
  }

  init(){
    const botaoAbrirModal = document.querySelector("#botao_categoria")
    const botaoFecharModal = document.querySelector("#close_categoria")
    const botaoFecharModalUpdate = document.querySelector("#close_categoria_update")
  
    botaoAbrirModal.addEventListener("click", this.abrirModal)
    botaoFecharModal.addEventListener("click", this.fecharModal)
    botaoFecharModalUpdate.addEventListener("click", this.fecharModalUpdate)

    this.categoriaLista.setCategoria(this.categoriaForm)
    this.categoriaLista.setOpenModal(this.abrirModal)
    this.categoriaLista.setOpenModalUpdate(this.abrirModalUpdate)

    // Insert
    document
      .getElementById("form_categoria")
      .addEventListener("click", async event => {
        event.preventDefault()
        await this.categoriaForm.insert()
        this.carregarListaCategoria()
        this.fecharModal()
      })

    // Update
    document
      .getElementById("form_categoria_update")
      .addEventListener("click", async event => {
        event.preventDefault()
        const categoria = await this.categoriaForm.getFormAndAction()
        this.categoriaLista.update(categoria)
        this.fecharModalUpdate()
      })

    // REMOVE

    document
      .getElementById("form_categoria_remove")
      .addEventListener("click", async event => {
        event.preventDefault()
        const id = document.getElementById("id_categoria_update").value

        this.categoriaLista.delete(id)
        this.categoriaForm.delete()
        this.fecharModalUpdate()
      })
  }

  async carregarListaCategoria(){
    const lista = await this.categorias.getLista()
    this.categoriaLista.pushArray(lista)
    this.categoriaLista.render()
  }

  abrirModal = _ => {
    const modal = document.getElementById("modal_categoria");
    modal.style.display = "block";
  }

  abrirModalUpdate = _ => {
    const modal = document.getElementById("modal_categoria_update");
    modal.style.display = "block";
  }

  fecharModal = _ => {
    const modal = document.getElementById("modal_categoria");
    modal.style.display = "none";
    this.categoriaForm.clearForm()
  }

  fecharModalUpdate = _ => {
    const modal = document.getElementById("modal_categoria_update");
    modal.style.display = "none";
    this.categoriaForm.clearForm()
  }
}

