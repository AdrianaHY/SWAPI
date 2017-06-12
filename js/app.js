var cargarPagina = function(){
  cargarPersonajes();
};

// todo esto es para no realizar el servidor
var  cargarPersonajes = function(){
  //información que necesitamos del API
  $.ajax("http://swapi.co/api/people/",{
    method:"GET",//porque necesitamos obtener información
    dataType:"json",
    //métodos. ambos reciben un parámetro
    //e cliente lanza un request, el servidor recibe un response.
    success: function(response){
      // hay que checar el api para ver como obtener lo que se requiere
      var personajes = response.results;
      var total = response.count;
      mostrarTotalPersonajes(total);
      mostrarPersonajes(personajes);
    },
    error: function(error){
      console.log("error",error);
    }
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
