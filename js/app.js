var cargarPagina = function(){
  cargarPersonajes();
};

// todo esto es para no realizar el servidor
var  cargarPersonajes = function(){
  var url = "http://swapi.co/api/people/";
  //recibe dos parámetros, el primero es la url y luego la función del success
  $.get(url, function(response){
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonajes(personajes);
  });
};

var mostrarTotalPersonajes = function(total){
  $("#total").text(total);
};

var mostrarPersonajes = function(personajes){
  var $ul = $("#personajes");
  personajes.forEach(function(personaje){
    var $li = $("<li />");
    $li.text(personaje.name + "-" + personaje.height + " cm");
    $ul.append($li);
  });
};


$(document).ready(cargarPagina);
