var imagensFilmes = ["https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGZlNjdlZmMtYTg0MC00MmZkLWIyNDktYmNlOWYzMTkzYWQ1XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomesFilmes = ["Grease </br> (1978)", "Coming to America </br> (1988)", "Coming 2 America </br> (2021)"]

var linksFilmes = ["https://www.imdb.com/video/imdb/vi1419380249?playlistId=tt0077631&ref_=tt_pr_ov_vi", "https://www.imdb.com/video/imdb/vi995605273?playlistId=tt0094898&ref_=tt_pr_ov_vi", "https://www.imdb.com/video/vi1935261977?playlistId=tt6802400&ref_=tt_pr_ov_vi"]

atualizar()
function atualizar() {
    var exibe = document.getElementById("exibeFilme")
    for (var i = 0; i < imagensFilmes.length; i++){
        exibe.innerHTML = exibe.innerHTML + "<a href="+ linksFilmes[i] + " target=_blank><div class='imagem'><img src=" + imagensFilmes[i] + ">" + "<h4 class='page-name'>" + nomesFilmes[i] + "</h4></div></a>"
    }
}

function AddFilmes(){
    var imagensAdd = document.getElementById("imagensFilmes").value
      var nomesAdd = document.getElementById("nomesFilmes").value
      var filmesAdd =  document.getElementById("linksFilmes").value
    if (imagensAdd.endsWith(".jpg")){
      var i = imagens.length
      imagens.push(imagensAdd)
        titulo.push(nomesAdd)
        link.push(filmesAdd)
        exibe.innerHTML = exibe.innerHTML + "<a href="+ linksFilmes[i] + " target=_blank><div class='imagem'><img src=" + imagensFilmes[i] + ">" + "<h4 class='page-name'>" + nomesFilmes[i] + "</h4></div></a>"
    }else{
      alert("Link inválido")
    }
    document.getElementById("imagensFilmes").value = ""
    document.getElementById("nomesFilmes").value = ""
    document.getElementById("linksFilmes").value = ""
  }

// var tentativas = 3

// while (tentativas > 0) {
  
 // tentativas = tentativas - 1
// } 

//==== é o mesmo que i == tentativas - interativo - interação 

//for (var i = 3; i > 0; i--){
//console.log(i)
//}
