var titulo = document.querySelector ('h1');
titulo.innerHTML = ('Hora do desafio!');

function verificarClique () {
    console.log ('O botão foi clicado.');
} function alertaDoAmor () {
    alert ('Eu amo JS.');
} function cliquePrompt () {
   var nomeCidade = prompt  ('Diga o nome de uma cidade do Brasil:');
    alert (`Já estive em ${nomeCidade} e lembrei de você!` );
} function cliqueSoma () {
    var soma1 = parseInt (prompt ('Forneça um número aleatório'));
    var soma2 = parseInt (prompt ('Agora forneça mais um'));
    resultado = soma1 + soma2;
    alert (`O valor da soma é: ${resultado}!`);
}

// "document.querySelector" é usado para especificar em java onde vamos alterar algo no código HTML.
// ".innerHTML" em seguida é o que vamos exibir como texto, sendo o Head ou a cabeça, o título que vem primeiro na página!.
// O comando "parseInt" vai transformar o que o usuário escreveu na box pelo comando "prompt" de "string" para um inteiro, o que permitirá em seguida que realizemos a soma na variável "resultado".

