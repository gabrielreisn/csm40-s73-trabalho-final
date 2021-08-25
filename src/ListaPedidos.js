
    class ListaPedidos{

      constructor({ div_id, pedidos }){
        this.div_lista_pedidos = div_id
        this.pedidos = pedidos
      }

      getPedidos(){
        this.dados = this.pedidos.getLista()
        return this.dados
      }


      async render(){
        const lista = document.getElementById(this.div_lista_pedidos)
        const dados = await this.getPedidos()
        dados.forEach(produto => {
          const elementHTML = this.getItem(produto)
          lista.appendChild(elementHTML)
        })
      }

      getItem(dado){
        const a = document.createElement('a');
        const div = document.createElement('div')
        const paragraph = document.createElement('p')
        
        div.id = "categoria_" + dado.id
        div.className = "list"

        paragraph.className = "nome"
        paragraph.innerHTML = `${dado.nome} - pedido(${dado.id})`

        div.appendChild(paragraph)
        a.appendChild(div)
        a.setAttribute('href', `./detalhes?id=${dado.id}`)
        return a;
      }
    }