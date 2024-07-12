function comprar() {
    var tipo= document.getElementById('tipo-ingresso');
    var qtd = parseInt(document.getElementById('qtd').value);

// alert(ingresso.value);
//alert(quantidade.value);

if (qtd >= 0) {
    if (tipo.value == 'pista') {
        comprarPista(qtd);
      } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
      } else {
        comprarInferior(qtd);
      }
} else {
    alert ('a Quantidade deve ser positiva!')
}
    
}


function comprarPista(qtd) {
    var qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('Quantidade indisponível para pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert ('Compra realizada');
    }
}

function comprarSuperior(qtd) {
    var qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('Quantidade indisponível para Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert ('Compra realizada');
    }
}

function comprarInferior(qtd) {
    var qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert ('Quantidade indisponível para Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert ('Compra realizada');
    }
}



