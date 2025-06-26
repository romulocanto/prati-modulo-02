// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function somarTotaisPorCliente(vendas) {
    return vendas.reduce((acc, { cliente, total }) => {
    // Se o cliente não existe no acumulador, o valor será 0
    // Caso contrário, irá adicionar ao valor existente.
    acc[cliente] = (acc[cliente] || 0) + total
    return acc 
    }, {})
}

// Lista de exemplo
const vendas = [
  { cliente: "Ana",   total: 120 },
  { cliente: "Bruno", total: 200 },
  { cliente: "Ana",   total:  80 },
  { cliente: "Carlos", total: 50 }
]

console.log(somarTotaisPorCliente(vendas))