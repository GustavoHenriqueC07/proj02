let estudante=prompt("Você é estudante? (sim/não)");
let idade=Number(prompt("Qual a sua idade?"));


if(estudante === "s" || estudante === "sim" || idade >= 60 ||idade <= 12){
    alert("Você pagará 20 reais")
} else {
    alert("Você pagará 40 reais")
}


