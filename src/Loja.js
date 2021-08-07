class Loja{
  constructor(){
    this.categoriasObj = new Categorias(new Fetch());
    this.produtosObj = new Produtos(new Fetch());
  }

  categorias(){
    return this.categoriasObj;
  }

  produtos(){
    return this.produtosObj;
  }
}