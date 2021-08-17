class Loja{
  constructor(){
    this.categoriasObj = new Categorias(new Fetch());
    this.produtosObj = new Produtos(new Fetch());
    this.pedidiosObj = new Pedidos(new Fetch());
    this.itemObj = new Items(new Fetch());
  }

  categorias(){
    return this.categoriasObj;
  }

  produtos(){
    return this.produtosObj;
  }

  pedidos(){
    return this.pedidiosObj;
  }

  items(){
    return this.itemObj;
  }
}