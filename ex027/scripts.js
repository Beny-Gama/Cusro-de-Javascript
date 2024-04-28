// Criar função somar que retorna a:
// soma de todos os múlltiplos de 3 e 5


somar(10);
function somar(limite) {
   let cont = 0
   for (let i = 0; i <= limite; i++)
      if (i % 3 === 0 
      || i % 5 === 0)
         cont += i

console.log(cont)
}