// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce (fn, delay) {
    let timerId = null // Imicializa timer

    //Retorno da função

    return function (...args) {
        // Verifica se existe um timer existente. Se existir, limpa a variável
        if (timerId !== null) {
            clearTimeout(timerId)
        }
        // Inicializa o timer. Se não houver novas chamadas até o final do timer,
        // executa a função original com os argumentos corretos e preserva o this
        timerId = setTimeout(() => {
            fn.apply(this, args)
            timerId = null        
        }, delay)
    }
}

// Gerando uma função de busca de arquivos inexistentes num servidor inexistente.
function buscaServidor(termo) {
  console.log("Consultando no servidor o arquivo:", termo)
}

// Criando uma função "debounce" da função acima
const buscaDebounced = debounce(buscaServidor, 500)

// Simulando busca: somente a última chamada executará 'buscaServidor'
buscaDebounced("Arquivo 01")
buscaDebounced("Arquivo 02")
buscaDebounced("Arquivo 03")