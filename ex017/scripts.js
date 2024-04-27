// IF ELSE

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa terde!
// Caso Cotrario : Boa Noite!

// if(condição) {
//     // codigo a ser executado
// } else if (outracondição) {
//    // codigo a ser executado
// } else {
//    // codigo a ser executado
//}
let hora = 17;
if (hora > 6 && hora < 12) {
    console.log('Bom Dia')
} else if ( hora > 12 && hora < 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}