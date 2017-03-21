function agregaFrutas()
  {
    var resultado = document.getElementById('nombreFruta').value;
    var elemento = document.getElementById("listaFrutas")
    var frutita = document.createElement("li");
    frutita.innerHTML = resultado;
    elemento.appendChild(frutita);
  }
