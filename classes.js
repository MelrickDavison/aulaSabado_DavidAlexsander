class  Cliente{
    constructor(name, phone, cpf ){
        this.nome = name;
        this.telefone = phone;
        this.cpf = cpf;
    }
}

class Empresa{
    constructor(name, cnpj){
        this.nome = name;
        this.cnpj = cnpj;
    }
}

class Pedido{
    constructor(numPedido, endEntrega, dataPedido){
        this.numPedido = numPedido;
        this.endEntrega = endEntrega;
        this.dataPedido = dataPedido;
        this.valorPedido = 0;
        this.listaProdutos = [];
    }

    adicionarProd(produto, quantidade){
        for(let i = 0; i < quantidade; i++){
        this.listaProdutos.push(produto)
        }
    }

    valorTotal(frete){
        for(let i = 0; this.listaProdutos.length; i++){
           this.valorPedido += this.listaProdutos[i].preco
        }
        this.valorPedido += frete
    }
}

    class Produto{
        constructor(nome, preco){
            this.nome = nome;
            this.preco = preco;
        }
    }