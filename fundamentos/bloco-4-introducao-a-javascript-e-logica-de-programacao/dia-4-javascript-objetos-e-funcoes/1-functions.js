function verificaPalindrome(palavra) {
    let letras = palavra.split("");
    if (letras == letras.reverse()){
        console.log(true);
    } else {
        console.log(false);
    }   
}
verificaPalindrome('hannah');



