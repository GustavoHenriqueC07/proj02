let ValordaCompra=Number(prompt("Quanto deu sua compra?"));
let Região=Number(prompt("Onde você mora? \n"+
    "1-Sudeste \n" +
    "2-Sul \n" +
    "3-Outros \n"));
let Frete;

if (Região === 1){
    Frete = 10;
} else if (Região === 2){
    Frete = 20;
} else{
    Frete = 30;
}

let ValorFinal

if (ValordaCompra <= 250){
    ValorFinal= Frete + ValordaCompra
    alert("Você pagará" + ValorFinal.toFixed(2));
}else{
alert("O frete é grátis, você pagará" + ValordaCompra.toFixed(2));}

