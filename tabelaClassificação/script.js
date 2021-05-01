var paulo = {
	nome: "Paulo",
	vitorias: 0,
	empates: 0,
	derrotas: 0,
	pontos: 0,
	imagem: "https://th.bing.com/th/id/OIP.GX5My2n-uu28lycGwe1fQQHaHa?w=222&h=220&c=7&o=5&dpr=1.38&pid=1.7"
	
}
//console.log(paulo.vitorias)

var rafa = {
	nome: "Rafa",
	vitorias: 0,
	empates: 0,
	derrotas: 0,
	pontos: 0,
	imagem: "https://th.bing.com/th/id/OIP.QcvVBroHSTb4VhYxUr09MAHaHa?w=195&h=195&c=7&o=5&dpr=1.38&pid=1.7"
}
//console.log(rafa.vitorias)

function calculaPontos(jogador){
	//console.log(jogador.vitorias + " x 3 + " + jogador.empates)
	var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas
	//console.log(pontos)
	return pontos
}
//console.log(rafa.pontos) // pontos declarados antes de chamar a função
// calculaPontos(paulo) //com console
rafa.pontos = calculaPontos(rafa)
//console.log(rafa.pontos) // após chamar a função
paulo.pontos = calculaPontos(paulo)

var jogadores = [rafa, paulo]

exibirJogadores(jogadores)

function exibirJogadores(jogadores){
	var html = ""
	for(var i = 0; i < jogadores.length; i++){
		html += "<tr><td><img src='"+ jogadores[i].imagem + "'/></td>"
		html += "<td>" + jogadores[i].nome + "</td>"
		html += "<td>" + jogadores[i].vitorias + "</td>"
		html += "<td>" + jogadores[i].empates + "</td>"
		html += "<td>" + jogadores[i].derrotas + "</td>"
		html += "<td>" + jogadores[i].pontos + "</td>"
		html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
		html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
		// html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
		html += "<td><button class='remjog' onClick='removerJogador(" + i +")'>Remover Jogador</button></td></tr>";
	}
	var tabelaJogadores = document.getElementById('tabelaJogadores')
	tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
	//console.log("clicou no botão vitória")
	var jogador = jogadores[i]
	jogador.vitorias++
	jogador.pontos = calculaPontos(jogador)
	if (i == 0) {
      jogadores[1].derrotas++
	  jogadores[1].pontos = calculaPontos(jogadores[1])
      } else if (i == 1) {
        jogadores[0].derrotas++ 
		jogadores[0].pontos = calculaPontos(jogadores[0])
      }
	exibirJogadores(jogadores)
}

function adicionarEmpate(i){
	//console.log("clicou no botão empate")
	var jogador = jogadores[i]
	jogador.empates++
	jogador.pontos = calculaPontos(jogador)
	 if (i == 0) {
      jogadores[1].empates++
      jogadores[1].pontos = calculaPontos(jogadores[1])
      } else if (i == 1) {
        jogadores[0].empates++
        jogadores[0].pontos = calculaPontos(jogadores[0])
      }
	exibirJogadores(jogadores)
}

// function adicionarDerrota(i){
// 	//console.log("clicou no botão derrota")
// 	var jogador = jogadores[i]
// 	jogador.derrotas++
// 	jogador.pontos = calculaPontos(jogador)
// 	exibirJogadores(jogadores)
// }

function adicionarNovoJogador(){
  var nome = document.getElementById("nome").value.toString();
  var img = document.getElementById("urlImage").value.toString();
  
  var jogador = {
    nome: nome ,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    imagem: img
  }  
  
  jogadores.push(jogador);
  exibirJogadores(this.jogadores);
	
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibirJogadores(jogadores);
}

function reset(){
  for(i=0; i < jogadores.length; i++){
    jogadores[i].vitorias = 0
    jogadores[i].derrotas = 0
    jogadores[i].empates = 0
    jogadores[i].pontos = 0
  }
  exibirJogadores(jogadores)
}

function resetDados() {
  jogadores = []
  exibirJogadores(jogadores)
 }
