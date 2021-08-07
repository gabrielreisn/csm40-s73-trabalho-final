# csm40-s73-trabalho-final

# Loja

Cria as referências para a loja, além de ser responsável pelo controle dos Produtos e Categorias.

```jsx
const loja = new Loja()
const categorias = loja.categorias() # Retorna um objeto Categorias 
const produtos = loja.produtos()     # Retonar um objeto Produtos  
```

# Categorias

Responsável por listar, adicionar ou selecionar uma Categoria especifica.

```jsx
const loja = new Loja()

# Retorna um objeto Categorias 
const categorias = loja.categorias()

# Mostra todas as categorias no console
categorias.listar()

# ou
categorias.getLista().then(console.log)
```

# Categoria

### Criar uma Categoria

```jsx
const loja = new Loja()
const categorias = loja.categorias()
const categoria = categorias.createCategoria()

# Modifica as informações presente da categoria
categoria.nome = "Hello word"
```

### Buscar uma categoria específica

```jsx

const id_categoria = 42;
const loja = new Loja()
const categorias = loja.categorias()
const categoria = categorias.getCategoria(id_categoria);

// Retorna:
// {
//   id = 42,
//   nome = "Produtos Pessoais"
// }
```

### Inserir na loja

```jsx
const loja = new Loja()
const categorias = loja.categorias()
const categoria = categorias.createCategoria()

categoria.nome = "Inserindo na loja"
categoria.inserir()
```

### Alterar uma categoria

Necessário um id para categoria. No exemplo, estamos alterando a categoria Produtos Pessoais

```jsx
const id_categoria = 42;
const loja = new Loja()
const categorias = loja.categorias()
const categoria = categorias.getCategoria(id_categoria);

categoria.nome "Produtos Automotivos"
categoria.alterar()
```

### Remover

Necessário ter um id para remover

```jsx
const id_categoria = 42;
const loja = new Loja()
const categorias = loja.categorias()
const categoria = categorias.getCategoria(id_categoria);

categoria.remover()
```

---

# Produtos

Responsável por listar, adicionar ou selecionar  Produto especifico.

```jsx
const loja = new Loja()
const produtos = loja.produtos()
produtos.listar()
```

# Produto

```jsx
const loja = new Loja();
const produtos = loja.produtos();
const produto = produtos.createProduto();

produto.nome = "Pasta de dente"
produto.categoria = 42      
produto.descricao = "Marca colgate"
produto.preco = 5.60
produto.imagem = "/img/produto_sem_foto.png"
produto.codigo = 1234

produto.inserir()
```

```jsx
const produto_id = 132
const loja = new Loja();
const produtos = loja.produtos();
const produto = produtos.getProduto(produto_id);

produto.nome = "Pasta de dente 2"
produto.alterar()

# Ou poderia remover

produto.remover()
```
