var valorDolarTexto = prompt("Qual o valor em dólar que você quer converter? ")

var valorDolarNumero = parseFloat(valorDolarTexto)

//alert(valorDolarNumero)

var valorReal = valorDolarNumero * 5.71
var valorRealDecimal = valorReal.toFixed(2)

//alert(valorRealDecimal)
document.write("<h3> U$"+ valorDolarNumero + " x R$5.50 = R$" + valorRealDecimal + "</h3>")