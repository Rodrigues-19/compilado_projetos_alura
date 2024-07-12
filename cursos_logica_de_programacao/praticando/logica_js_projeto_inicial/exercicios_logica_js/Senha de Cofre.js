 var senhaDoCofre = 18795;
 var senhaDigitada;
 var limites = 2;
 var saldoDaConta = " R$ 10.000" ;
 
 while (limites >=0){
senhaDigitada = prompt("Insira a senha para acesso ao cofre");

    if (senhaDigitada == senhaDoCofre) {
     alert(`Senha correta, abrindo cofre`);
     alert(`O saldo de sua conta é ${saldoDaConta} me empresta uma grana aí meu Consagrado!`);
        break;
    } else if(senhaDigitada != senhaDoCofre) {
    alert(`Senha incorreta, tente novamente, restam ${limites} tentativas`);
    } limites--;
    }