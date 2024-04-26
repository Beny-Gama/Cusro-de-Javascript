// Para nomear uma FUNCTION é boa pratica é usar: Verbo + Substantivo
// ex: resetCor, alterarObjeto,

let corSite  = 'azul';

function resetCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);

resetCor('verde', 'claro');

console.log(corSite);