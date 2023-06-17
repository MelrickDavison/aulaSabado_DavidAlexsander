
let loja1 = new Empresa("Burguer King", 12131)

let cliente1 = new Cliente("Kemylly", 89024302, 819810, "Rua longe")

let prod1 = new Produto("Capacete", 500)
let prod2 = new Produto("Cotoveleira", 85)
let prod3 = new Produto("Short", 30)

let itemPed = new ItemPed(prod1, 1)
let itemPed2 = new ItemPed(prod3, 2)
let itemPed3 = new ItemPed(prod2, 2)

let pedido = []

pedido.push(itemPed, itemPed2, itemPed3)

let pedidoPedido = new Pedido(192, "19/04/2022", 55, cliente1, loja1, pedido)


console.log(pedidoPedido.subTotal())
