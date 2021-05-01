function adicionarFilme(){
    // console.log("clicou")
     var campoFilmeFavorito = document.querySelector('#filme')
     //console.log(campoFilmeFavorito)
     var filmeFavorito = campoFilmeFavorito.value
     //console.log(filmeFavorito)
     //document.write("<img src=" + filmeFavorito + "/>")
     if(filmeFavorito.endsWith('.jpg')){ 
     listarFilmesNaTela(filmeFavorito)
     }else{
       alert("Imagem inválida.")
     }
     campoFilmeFavorito.value = ""
   }
   
   function listarFilmesNaTela(filme){
     var listaFilmes = document.querySelector('#listaFilmes')
     var elementoFilme = "<img src=" + filme + "/>"
     listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
   }
      