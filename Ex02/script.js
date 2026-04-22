function calcular(){
let ValorPedido=Number(document.getElementById("valor").value);
let CartaoFidelidade=document.getElementById("cartao").value.toLowerCase();
let resultado = document.getElementById("resultado");
if (ValorPedido >= 50){
    if(CartaoFidelidade === "s" || CartaoFidelidade === "sim"){
        let desconto = ValorPedido * 0.1;
        let ValorFinal = ValorPedido - desconto;

        resultado.innerHTML = "você pagará R$" + ValorFinal.toFixed(2);
    } else {
        resultado.innerHTML= "Você recebeu um cookie de brinde";
    }
    } else{
    resultado.innerHTML = "você pagará" + ValorPedido.toFixed(2);
}
}