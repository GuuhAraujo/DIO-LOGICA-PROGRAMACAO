let qtdVitorias =[ 11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111]
let qtdDerrotas =[  1,  3,  4,  5,  6,  7,  8,  9, 10,  10,  10]

for ( let i = 0; i < qtdVitorias.length; i++){

    let vitorias = qtdVitorias [i]
    let derrotas = qtdDerrotas [i]
    let SaldoVitorias = vitorias - derrotas
    let nivel


    if (SaldoVitorias <= 10){
        nivel = "Ferro"

    } else if(SaldoVitorias >= 11 && SaldoVitorias <= 20) {
        nivel = "Bronze"

    } else if (SaldoVitorias >= 21 && SaldoVitorias <= 50){
        nivel = "Prata"

    } else if (SaldoVitorias >= 51 && SaldoVitorias <= 80) {
        nivel = "Ouro"

    } else if (SaldoVitorias >= 81 && SaldoVitorias <= 90) {
        nivel = "Diamante"

    } else if (SaldoVitorias >= 91 && SaldoVitorias <= 100) {
        nivel = "Lendário"

    } else if (SaldoVitorias >= 101 && SaldoVitorias <= 99999999){
        nivel = "Imortal"
    }

    console.log(`O Herói tem de saldo de ${SaldoVitorias} está no nível ${nivel}`)
}