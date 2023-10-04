let vitorias = 100
let derrotas = 30
let resultado = vitorias-derrotas
let nivel = " "
console.log ("felipão possui " + resultado + " pontos!")


    switch (true){
        case resultado < 10:
            nivel = "Ferro";
            break;
        case resultado >=11 && resultado <= 20:
            nivel = "Bronze";
            break;
        case resultado >=21 && resultado <= 50:
            nivel = "Prata";
            break;
        case resultado >=51 && resultado <= 80:
            nivel = "Ouro";
            break;
        case resultado >=81 && resultado <= 90:
            nivel = "Diamante";
            break;
        case resultado >=91 && resultado <= 100:
            nivel = "Lendário";
            break;
        case resultado >=101:
            nivel = "Imortal";
               break;
    }
    console.log ("Felipão tem saldo de " + resultado + " e está no nível " + nivel);
