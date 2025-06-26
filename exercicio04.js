// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

const prompt = require ("prompt-sync") () // Habilitando entrada


function fatorial (n) {
    let resposta = 0
    //Se o valor não for um número ou se for negativo, retorne uma mensagem de erro
    if ((isNaN(n)) || (n<0)){
        console.error ("Argumento inválido")
        return
    } 

    // calculo do fatorial.
    if (n > 0) {
        resposta = n * fatorial (n-1)
    } else resposta = 1
    
    return resposta
}

let numero = Number(prompt ("Digite o número para o fatorial: ")) //capturando a string
console.log (fatorial (numero))