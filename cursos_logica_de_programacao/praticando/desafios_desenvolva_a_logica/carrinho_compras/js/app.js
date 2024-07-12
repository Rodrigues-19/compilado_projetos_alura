// chamando a função de limpar para que a página seja iniciada com tudo zeradinho 
var totalGeral;
limpar();



function adicionar() {

// recuperar valores de nome do produtos, quantidade e valor.
var produtos = document.getElementById('produto').value;
var nomeProdutos = produtos.split('-')[0]; // a id produto em HTMl contempla o nome do proudto e o valor do mesmo. Como queremos o nome e o valor separados, temos que usar o .split('-')[0]. o hífen (-) diz para o computador que queremos considerar duas coisas diferentes no código em HTML e o colchetes com 0 indica a posição do item que queremos pegar
var valorUnitario = produtos.split('R$')[1]; // O computador vai buscar no HTML o que vem após o R$. o R$ é a referência e o 1 é o texto que queremos que ele pegue.
var quantidade = document.getElementById('quantidade').value;

// uso do Alert para veriifcar e conseguiu recuperar os dados corretamente.
//alert (nomeProdutos); 
//alert(valorUnitario);
//alert(quantidade.value);

// calculando o preço dos produtos com relação à quantidade (Subtotal).
var preco = quantidade * valorUnitario;
// alert(preco);

var CestaProdutos = document.getElementById('lista-produtos');
// Aqui na cesta, estamos escrevendo na tela o texto da quantidade de produtos e o valor que foi adicionado no carrinho, porém sem realizar o cálculo ainda. E permitindo que fique mais de um item no carrinho conformw e o usuário adiciona.
CestaProdutos.innerHTML = CestaProdutos.innerHTML + `<section class="carrinho__produtos__produto"> 
<span class="texto-azul">${quantidade}x</span> ${nomeProdutos} <span class="texto-azul"> R$${valorUnitario}</span>
</section>`;
// Atualizar o valor Total
totalGeral = totalGeral + preco;
var campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0; // limpando a quantidade após pressionar botão de adicionar

}

function limpar () {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';

}







// a primeira coisa é pensar na ação que clicar no botão desencadeia. Por isso as duas funções adicionar () {} e limpar (){}.
// logo em seguida, recuperamos os valores, no caso, nome (produto), quantidade e valor.
// Calcular o preço, o subtotal
// adicionar ao carrinho.
// atualizar o grande total


// var butonAdicionar = document.querySelector('.botao-form botao-adicionar');





