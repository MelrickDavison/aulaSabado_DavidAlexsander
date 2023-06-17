class  Cliente{
    constructor(name, phone, cpf, endEntrega){
        this.nome = name;
        this.telefone = phone;
        this.cpf = cpf;
        this.endEntrega = endEntrega;
    }
}

class Empresa{
    constructor(name, cnpj){
        this.nome = name;
        this.cnpj = cnpj;
    }
}

class Pedido{
    constructor(numPedido, dataPedido, frete, cliente, loja, listaDeProdutos){
        this.numPedido = numPedido;
        this.dataPedido = dataPedido;
        this.valorFrete = frete;
        this.listaProdutos = listaDeProdutos;
        this.cliente = cliente;
        this.loja = loja;
    }


   subTotal(){
    let subTotal = 0;
    for(let i = 0; i < this.listaProdutos; i++){
        subTotal += this.listaProdutos[i].precoTotal
    }
    return subTotal
   }

   total(){
    return this.subTotal() + this.frete;
   }


}

    class Produto{
        constructor(nome, preco){
            this.nome = nome;
            this.preco = preco;
        }
    }

    class ItemPed{
        constructor(produto, quantidade){
            this.produto = produto;
            this.quantidade = quantidade;

        }

        precoTotal(){
            return this.produto.preco * this.quantidade
        }
        
    }