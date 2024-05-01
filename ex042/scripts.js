// Construtor Funcrion (exercicio)
// Cria um objeto postagem usado um função de construtor.

//

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.coometarios,
    this.estaAoVivo = true
}

let Postagem = new Postagem('a', 'b', 'c');
console.log(postagem);
