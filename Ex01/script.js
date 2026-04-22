let ValorDoCarro=Number(prompt("Digite o valor do carro"));
let MetododePagamento=Number(prompt("Como você deseja efetuar esse método de pagamento?:\n" +
    "1 - À vista no PIX\n" +
    "2 - Parcelado em até 24x\n"+
    "3 - Financiamento em até 48x"));
let ValorPIX;
let ValorParcelas;
let ValorFinanciamento;

if (MetododePagamento === 1) {
    ValorPIX = ValorDoCarro * 0.85; 
    // Valor do 15%
    alert("Você irá pagar:" + ValorPIX.toFixed(2));
}
else if (MetododePagamento === 2) {
    ValorParcelas = ValorDoCarro * 1.05
    Parcelas=Number(prompt("Quantas Parcelas você quer? (Até 24x)"));
    ValorPIX = ValorParcelas / Parcelas;
    alert("Você pagará:" + ValorParcelas.toFixed(2) + "\nParcelas" + Parcelas + "x de R$" + ValorPIX.toFixed(2));
}
else if (MetododePagamento === 3) {
    ValorFinanciamento = ValorDoCarro * 1.2 
    Parcelas=Number(prompt("Quantas parcelas?(Até 48)"));
    ValorParcelas= ValorFinanciamento / Parcelas;
    alert("Voce financiará:" + ValorFinanciamento.toFixed(2) + "\nParcelas" + Parcelas  + "x de R$" + ValorPIX.toFixed(2));
}
else {
    alert("Opção inválida");
}