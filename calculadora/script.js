var valorUm = parseInt(prompt("Digite o primeiro valor: "))
var valorDois = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para fazer uma soma, 2 para subtração, 3 para multiplicação ou 4 para divisão: ")

if (operacao == 1){
  var resultado = valorUm + valorDois
  document.write("<h2>" + valorUm + " + " + valorDois + " = " + resultado + "</h2>")
} else if (operacao == 2){
  var resultado = valorUm - valorDois
  document.write("<h2>" + valorUm + " - " + valorDois + " = " + resultado + "</h2>")
} else if (operacao == 3){
  var resultado = valorUm * valorDois
  document.write("<h2>" + valorUm + " x " + valorDois + " = " + resultado + "</h2>")
} else if (operacao == 4){
  var resultado = valorUm / valorDois
  document.write("<h2>" + valorUm + " / " + valorDois + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}