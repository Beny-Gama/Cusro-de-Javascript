// clonagem de Objeto
// Para colnar um objeto vc so tem que usar = Object.assign({},obejto há ser clonar.) 

const celular = {
    marcaCelular : 'Asus',
    tamanhoTela: {
        velocidade: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log('Fazendo Ligação...');
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto);


// outra forma de clonar um objeto é = {...}

const objeto2 = {...celular};

console.log(objeto2)