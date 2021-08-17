class ProdutoForm{

  constructor(loja){
    this.campoId = document.getElementById("id_produto")
    this.campoNome = document.getElementById("nome_produto")
    this.campoCategoria = document.getElementById("id_categoria_produto")
    this.campoDescricao = document.getElementById("descricao_produto")
    this.campoPreco = document.getElementById("preco_produto")
    this.campoImagem = document.getElementById("imagem_produto")
    this.campoCodigo = document.getElementById("codigo_produto")
    this.campoPeso = document.getElementById("peso_produto")
    this.loja = loja
  }

  clearForm(){
    this.campoId.value = null
    this.campoNome.value = null
    this.campoCategoria.value = null
    this.campoDescricao.value = null
    this.campoPreco.value = null
    this.campoImagem.value = null
    this.campoCodigo.value = null
    this.campoPeso.value = null
  }

  setFormAtProduto(produto){
    produto.id = this.campoId.value
    produto.nome = this.campoNome.value
    produto.categoria = this.campoCategoria.value
    produto.descricao = this.campoDescricao.value
    produto.preco = this.campoPreco.value
    produto.imagem = this.campoImagem.value
    produto.codigo = this.campoCodigo.value
    produto.peso = this.campoPeso.value
    console.log(produto)
  }

  setProdutoAtForm(produto){
    this.campoId.value = produto.id
    this.campoNome.value = produto.nome
    this.campoCategoria.value = produto.categoria
    this.campoDescricao.value = produto.descricao
    this.campoPreco.value = produto.preco
    this.campoImagem.value = produto.imagem
    this.campoCodigo.value = produto.codigo
    this.campoPeso.value = produto.peso
  }

  async update(){
    const produtos = this.loja.produtos()
    const produto = await produtos.getProduto(this.campoId.value)
    this.setFormAtProduto(produto)
    console.log(produto)
    console.log(this.campoCategoria.value)
    produto.alterar()
      .then(console.log)
  }

  async delete(){
    const produto = await produtos.getProduto(this.campoId.value)
    produto.remover()
  }

  insert(){
    const produtos = this.loja.produtos()
    const produto = produtos.createProduto()
    this.setFormAtProduto(produto)
    return produto.inserir()
  }

  getFormAndAction(){
    const id = this.campoId.value
    if(id) this.update()
    else this.insert()
  }

  async carregarObjeto(id){
    const produtos = this.loja.produtos()
    const produto = await produtos.getProduto(id)
    this.setProdutoAtForm(produto)
  }
}