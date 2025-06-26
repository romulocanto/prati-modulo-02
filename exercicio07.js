// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenapreco (produtos){
    produtos.sort((a,b) => a.preco - b.preco) // Ordena os itens por preço de forma crescente
    return produtos.map(({Nome}) => Nome) // Retorna apenas os nomes
}


// Lista a ser ordenada
let lista = [
    {Nome: "Maça", preco: 10},
    {Nome: "Pera", preco: 15},
    {Nome: "Uva", preco: 5},
    {Nome: "Salada Mista", preco: 30},
    {Nome: "Sacola", preco: 1}
]


console.log (ordenapreco(lista))