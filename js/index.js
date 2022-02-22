var x = parseFloat(prompt("Quantos usuários devem ser cadastrados?"));
var n = [];

for (var i = 1; i <= x; i++){
    var array = {
        nome: "",
        idade: 0,
        sexo : "",
        CPF: 0

    }

    array.nome =(prompt("Digite seu nome")),
    array.idade =(prompt("Digite sua idade")),
    array.sexo =(prompt("Digite seu sexo")),
    array.CPF =(prompt("Digite seu cpf")),

    n.push(array);
}

console.log(n)

for (var l of n) {
document.write(`Nome: ${l.nome}<br>`)
document.write(`idade: ${l.idade}<br>`)
document.write(`sexo: ${l.sexo}<br>`)
document.write(`CPF: ${l.CPF}<br><br><br>`)
}


