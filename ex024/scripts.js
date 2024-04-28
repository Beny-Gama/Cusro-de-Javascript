// velocidade maxima de até 70km
// a cada 5km acima do limite você ganha 1 ponto na carteira
// Math.floor
// Se a cartira tiver mais de 12 pontos ela sera suspensa 

const resultado = verificarVelocidade(95);
console.log(resultado);

function verificarVelocidade(velocidade, velocidadeMaxima=70, kmPorPonto=5) { 
   velocidade = Math.floor(velocidade);

   if (velocidade <= velocidadeMaxima)
    return 'OK'

   velocidade = velocidade - velocidadeMaxima
   let cont = 1   
   while (velocidade > kmPorPonto){
      cont++
      velocidade -= kmPorPonto
   }

   if (cont >= 12)
      return 'Caritera Suspendida.'
   return 'Pontos: '+ cont
}