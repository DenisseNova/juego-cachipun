function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var cantidad = prompt("cuantas veces quieres jugar")

for (i = 1; i <= cantidad; i++ ){
  var opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2");
  if (opcionUsuario != 0 && opcionUsuario != 1 && opcionUsuario != 2) {
    alert("debes elegir 0, 1, 2 o no podremos jugar");
    continue;
  }
  var opcionMaquina = aleatorio(0,2); 
  alert("Mac elegio: " + opciones[opcionMaquina] + "\nTu elegiste: " + opciones[opcionUsuario]);
  resultado(opcionUsuario, opcionMaquina);
}


function resultado (optusuario, optmaquina){
  if (optusuario == piedra){
    if (optmaquina == piedra){
      alert("Empate")
    }else if (optmaquina == papel){
      alert("Perdiste")
    }else {
      alert("Ganaste")
    }
  }
  if (optusuario == papel){
    if (optmaquina == papel){
      alert("Empate")
    }else if (optmaquina == tijera){
      alert("Perdiste")
    }else {
      alert("Ganaste")
    }
  }
  if (optusuario == tijera){
    if (optmaquina == tijera){
      alert("Empate")
    }else if (optmaquina == piedra){
      alert("Perdiste")
    }else {
      alert("Ganaste")
    }
  }
}