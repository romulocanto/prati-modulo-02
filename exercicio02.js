55// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require ("prompt-sync") () // Habilitando entrada

let numero = Math.round(Math.random() * 100) // Gerando o número

// Ajustando erros de aproximação
if (numero === 0) numero = 1
if (numero === 101) numero = 100

let chute = 111 // Inicializando a variável do chute


while (chute != numero){
    chute = Number(prompt ("Advinhe o número entre 1 e 100: "))  // Recebendo o valor
    if (chute > numero) { 
        console.log ("O número é menor do que você chutou") 
    } else if (chute < numero) {
        console.log ("O número é maior do que você chutou")
    } else if (chute === numero) {
        console.log ("Acertou!")
    } else {
        console.log ("Inválido") // Caso o valor não seja um numero
    }
}