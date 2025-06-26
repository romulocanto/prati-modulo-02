// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {

    // Inicializa o cache
    const cache = new Map ()

    return function ( ... args) {
        // Transforma os argumentos em string
        const key = JSON.stringify(args)

        // Se o resultado está na cache, use-o.
        if (cache.has (key)) {
            return cache.get(key)
        }

        // Caso não tenha em cache, faz o chamado da função e salva o resultado em cache
        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}


// Criando uma função de cálculo de Fibonacci para teste de desempenho.
function fibonacci (n) {
    if (n < 2)  return n
    return fibonacci (n - 1) + fibonacci (n - 2)
}

// Inicializando uma "versão memoize" da função acima.
const fastFib = memoize(function fibonacci (n) {
    if (n < 2)  return n
    return fastFib (n - 1) + fastFib (n - 2)
})

// Testando o dsempenho das funções
console.log (fibonacci (43))
console.log (fastFib (43))