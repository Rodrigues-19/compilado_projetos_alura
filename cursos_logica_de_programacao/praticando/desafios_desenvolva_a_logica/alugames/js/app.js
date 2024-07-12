function alterarStatus(id) {
var gameClicado = document.getElementById (`game-${id}`); // recuperar o que o usuário clicou.
var img = gameClicado.querySelector('.dashboard__item__img'); //recuperando o elemento da imagem do jogo.
var buton = gameClicado.querySelector('.dashboard__item__button'); // recuperando o elemento do botão clicado.
var nomeJogo = gameClicado.querySelector ('.dashboard__item__name');

if (img.classList.contains('dashboard__item__img--rented')) {
   if(confirm(`Você tem certeza que quer devolver ${nomeJogo.innerHTML}?`)) {
    img.classList.remove('dashboard__item__img--rented'); // Estamos chamando a variável img e pedindo para remover uma classe da lista de classe das imagens, em específico, estamos removendo o aspecto de cor mais apagada quando clicammos no botão para sinalizar que o jogo pode ser alugado novamente.
    buton.classList.remove ('dashboard__item__button--return'); // aqui estamos chamando a variável buton e pedindo para remover da lista de classes o botão de devolver.
    buton.innerHTML = 'Alugar'; // adicionando ao botão a palavra Alugar.
}
} else {
    img.classList.add('dashboard__item__img--rented'); // Adicionando à classe de imagens a opção mais apagada indicando que o jogo está alugado.
    buton.classList.add('dashboard__item__button--return'); // Adicionando à classe do botão a opção de devolver. 
    buton.innerHTML = 'Devolver'; // Imprimindo na tela, em específico no botão a palavra devolver, para sinalizar ao usuário que ele pode executar a ação de devolver o produto.
}

}
