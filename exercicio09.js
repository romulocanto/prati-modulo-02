// Escreva duas funções:
// - paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// - objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
    // Inicializando objeto
    var objeto = {}
    // Lendo os pares e adicionando ao objeto
    for (var i = 0; i < pares.length; i++) {
        var chave  = pares[i][0]
        var valor  = pares[i][1]
        objeto[chave] = valor
    }
  return objeto;
}

function objetoParaPares(obj) {
    // Iniciando pares
    var pares = []
    // Lendo o objeto e adicionando aos pares
    for (var chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]])
        }
    }
    return pares
}

// Exemplo
const paresTeste = [["nome", "Rômulo"], ["idade", 48], ["cidade", "Salvador"]]
let objetoResultado = paresParaObjeto (paresTeste)
console.log (objetoResultado)
let paresResultado = objetoParaPares (objetoResultado)
console.log (paresResultado)
