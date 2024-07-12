amigos = [];

function adicionar() {
var nomeAmigo = document.getElementById('nome-amigo');

if (nomeAmigo.value == '') {
alert('Informe o nome completo do amigo!');
return;
} 

if (amigos.includes == nomeAmigo.value) {
alert('Nome já adicionado!');
return;
}

var listaAmigos = document.getElementById('lista-amigos');

amigos.push(nomeAmigo.value) // .push adiciona elementos dentro da Array "amigos".

if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo.value;
} else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value
}
nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
alert ('Adicione pelo menos 4 amigos!');
return;
    }

    embaralha(amigos);
    var sorteio = document.getElementById('lista-sorteio');
    for(var i = 0; i < amigos.length; i++ ) {  // o for percorre o array inteiro.
        if(i ==amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
        }
        
}

}

function embaralha(lista) {
    for(var indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

//atribuição via destructuring
        [lista[indice-1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice-1]];
    }    
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
   
}
