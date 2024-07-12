var fazendo_o_calculo 
var respostaCerta = 4;
while (fazendo_o_calculo != respostaCerta ) {
    fazendo_o_calculo = prompt ("Qual a resposta da pergunta a seguir: Quanto é 2 + 2?");
    if (fazendo_o_calculo == 4) {
        alert ("Parabéns, você atingiu 100 pontos e provou que sabe fazer conta de mais!");
        console.log ("você atingiu 100 pontos");
    } else {
        alert ("Essa não é a resposta correta,  tente novamente!");
        console.log ("Você é uma anta, fugiu do primário?!");
    }  
}
