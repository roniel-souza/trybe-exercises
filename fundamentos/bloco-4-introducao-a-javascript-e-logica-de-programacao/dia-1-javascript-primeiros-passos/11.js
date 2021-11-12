let salarioBruto = 3000
let INSS = 0;
{
    if (salarioBruto > 0 && salarioBruto < 1556.94){
        INSS = salarioBruto * 8 / 100
    }
    else if (salarioBruto >= 1556.94 && salarioBruto < 2594.92 ){
        INSS = salarioBruto * 9 / 100
    }
    else if (salarioBruto >= 2594.92 && salarioBruto < 5189.82 ){
        INSS = salarioBruto * 11 / 100
    }
    else if (salarioBruto >= 5189.82){
        INSS = 570.88
    }
}
let salarioBase = salarioBruto - INSS
let IR = 0;
{
    if (salarioBase < 1903.98){
        IR = 0
    }
    else if (salarioBase >= 1903.98 && salarioBase < 2826.65){
        IR = salarioBase * 7.5 / 100 - 142.80
    }
    else if (salarioBase >= 2826.65 && salarioBase < 3751.05){
        IR = salarioBase * 15 / 100 - 354.80
    }
    else if (salarioBase >= 3751.05 && salarioBase < 4664.68){
        IR = salarioBase * 22.5 / 100 - 636,13
    }
    else if (salarioBase >= 4664.68){
        IR = salarioBase * 27.5 / 100 - 869.36
    } 
}
let salarioLiquido = salarioBase - IR
console.log("SALÁRIO BRUTO: " +salarioBruto+ " REAIS")
console.log("SÁLARIO LÍQUIDO: " +salarioLiquido+ " REAIS")