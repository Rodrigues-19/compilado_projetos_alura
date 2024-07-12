alert("Você consegue adivinhar o número secreto?");

numeroMaximo = 8000;
let secretNumber = parseInt(Math.random () * numeroMaximo + 1); 

console.log ("O número secreto é:" + "" + secretNumber);
let chuteDoTrouxa;
var chutes = 1;

while (chuteDoTrouxa != secretNumber) {
  chuteDoTrouxa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  if (chuteDoTrouxa == secretNumber) {
    break;
    
} else {
    if (chuteDoTrouxa < secretNumber) {
        alert (`O número correto é maior que ${chuteDoTrouxa}`);
    } else {
        alert (`O número correto é menor que ${chuteDoTrouxa}`);
    }
} chutes++;
}

concordânciacerta = chutes > 1 ? 'chutes' : 'chute';

alert(`Parabéns você descobriu o número secreto ${secretNumber} com ${chutes} ${concordânciacerta} que difícil ein?`); //empregando a crase e os símbolso "$" e as chaves, você consegue chamar uma variável em uma string sem usar os sinais matemáticos.


// console.log é uma ferramenta para desenvolvedores que pode ser acessada no google chorme com o botão direito em inspecionar.
// if e else são "blocos de comando" (tudo quanto é executado dentro de chaves "{}") que significam: "SE" e "SENÃO" respectivamente.
// é importante sempre testar o seu código, nas mais diversas possibilidades a fim de mitigar erros e descobrir se há algum problema que impessa o bom funcionamento do código.
// concatenação é quando juntamos uma string, representado entre aspas e um número por exemplo. para fazer essa junção, usa-se o sinal matemático "+".
// a Template String é outra forma de fazer uma concatenação, sem que use o sinal matemático de "+".
// note que quando empregamos um template string, não é ncessário fazer algo para que o código interprete o espaço entre as palavras.
// para atribuir mais 1 a uma variável, basta acrescentar "++".
// da mesma forma, para tirar uma unidade de uma variável, emprega-se o "--".
// And ou "e" em javascript é representdo por "&&" e ou é representado por "||"
// o operador ternãrio, é representado pelos dois pontos ":". Ele permite que você altere por exemplo algo específico em uma sentença sem que seja ncessário que você escreva novos blocos de if e else. Para empregá-lo, lembre-se que é necessário equiparar com uma certa variável e usar o "?" e ":".
// importante, para armazenar um valor em uma variável e java, podemos usar somente o nome empregar o sinal de igual, ou usar antes do nome da variável a palavra "let" ou "var" dessa mesma forma o java vai entender.

