const custoProduto = 14
const valorDeVenda = 0
let valorDoImposto = custoProduto / 5
let valordoProduto = custoProduto + valorDoImposto
let lucroPorProduto = valorDeVenda - valordoProduto
let lucroFinal = 1000 * lucroPorProduto
if (custoProduto == 0 || valorDeVenda == 0){
    console.log("ERRO!! - PROGRAMA ENCERRADO!!!")
} else{
    console.log("Ao vender 1000 produtos a empresa lucrará: R$ " +lucroFinal+ " reais.")
}

