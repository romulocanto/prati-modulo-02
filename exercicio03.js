// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require ("prompt-sync") () // Habilitando entrada

let frase = prompt ("Digite a frase: ") //capturando a string

let palavras = frase.split(" ") //fracionando as palavras em um array
let unicas = [] //inicializando o array de palavras únicas.


//Será varrido todo array de palavras e será verificado se o índice do array já existe no array de palavras únicas
//Caso não exista, será adicionado.
for (let i=0;i<palavras.length;i++) {
    if (unicas.indexOf(palavras[i]) === -1){
        unicas.push(palavras[i])
    }
}

console.log(unicas) //exibindo o array