let Salario=Number(prompt("Quanto é o seu salário?"));
let Parcela=Number(prompt("Quanto você deseja parcelar?"));
let Porcentagem= Salario * 0.3;

if (Parcela >= Porcentagem){
    alert("Você não conseguiu o emprestimo");
} else {
    alert("Voce conseguiu o emprestimo");
}