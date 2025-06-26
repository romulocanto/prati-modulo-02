// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.


// função pra verificar se o ano é bissexto
function bissexto (ano) {
    if ((ano % 4 === 0) && ((ano % 100 === 0) && (ano % 400 === 0))) return true // se o ano atender as condições, ele será bissexto
    return false // caso contrário, não será
}


function ehDataValida (dia,mes,ano) {

    const mes30 = [4, 6, 9, 11] // separando os meses que terminam com 30
    
    // Listando as condições que indicam que a data é inválida.
    if (isNaN(dia) || isNaN(mes) || isNaN (ano)) return false //os valores precisam ser números
    if (ano < 0) return false  // o ano não pode ser negativo
    if (mes < 0 || mes > 12) return false // o mês tem que ser um número entre 1 e 12
    if (dia < 0 || dia > 31) return false // o dia, inicialmente precisa estar entre 1 e 31 (calculos de mês serão vistos adiante)
    
    if (mes30.includes (mes) && dia > 30) return false // o dia não pode ser 31 se o mês estiver na listagem dos meses de 30 dias
    if (mes === 2 && dia > 29 && bissexto(ano)) return false // o dia não pode ser acima de 29 se o mês for fevereiro e o ano bissexto
    if (mes === 2 && dia > 28 && !bissexto(ano)) return false // o dia não pode ser acima de 28 se o mês for fevereiro e o ano não bissexto

    return true //se passou por todas essas condições, a data estará correta        
}