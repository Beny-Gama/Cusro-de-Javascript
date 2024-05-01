//Javacript Aula 46 - Faixa de Preço (Exercicio)
// É que voce crie uma array de objeto de faiza de preço para que ela possa ser usado em um iqual o mercado live
// faixas, tooltip, min, max


let faixas = [
    {tooltip: 'até R$:700', min: 0, max: 700},
    {tooltip: 'até R$:700 a R$:1000', min: 700, max: 1000},
    {tooltip: 'R$:1000 ou mais', minimo: 1000, max: 99999999999}
]

function crieFaixaPreco(tooltip,min,max){
    return {
        tooltip,
        min,
        max
    } 
};


let faixas2 = [
    crieFaixaPreco('até R$:700',1,100),
    crieFaixaPreco('até R$:700 a R$:1000',100,1000),
    crieFaixaPreco('R$:1000 ou mais',1000,99999)
]

console.log(faixas);
console.log(faixas2);