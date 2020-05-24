// # We must use JS as we need to select previous
// # elements which can't be done with CSS.

// // Esto lo saque de codepen
// (function () {
//     // We must use JS as we need to select previous
//     // elements which can't be done with CSS.
//     className('skew-title').children('span').hover(function () {
//       var $el, n;
//       $el = $(this);
//       n = $el.index() + 1;
//       $el.addClass('flat');
//       if (n % 2 === 0) {
//         return $el.prev().addClass('flat');
//       } else {
//         if (!$el.hasClass('last')) {
//           return $el.next().addClass('flat');
//         }
//       }
//     }, function () {
//       return $('.flat').removeClass('flat');
//     });
  
//   }).call(this);
  
  
//   //# sourceURL=coffeescript

//Selecciono elementos
var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

//Pongo todo en funciones para que quede mas lindo

function inputLength(){
    if(input.value.length>0){
        return true;
    }
    
}

function clickeando(){
    if(inputLength()){
        //creo el nuevo li
        var li = document.createElement("li");
        //Le agrego el contenido del li
        li.appendChild(document.createTextNode(input.value));
        //lo incorporo a la ul
        ul.appendChild(li);
        //pongo el input vacio
        input.value="";
        //los agrego con el boton de borrar
        var boton = document.createElement("button");
        boton.appendChild(document.createTextNode("Borrar"));
        li.appendChild(boton);
        // .onclik me ejecuta lo que le ponga despues del igual
        boton.onclick=removeParent;

        
    }
}

function apEnter(evento){
    if(inputLength() && evento.keyCode===13){
        //creo el nuevo li
        var li = document.createElement("li");
        //Le agrego el contenido del li
        li.appendChild(document.createTextNode(input.value));
        //lo incorporo a la ul
        ul.appendChild(li);
        //pongo el input vacio
        input.value="";
        //los agrego con el boton de borrar
        var boton = document.createElement("button");
        boton.appendChild(document.createTextNode("Borrar"));
        li.appendChild(boton);
        // .onclik me ejecuta lo que le ponga despues del igual
        boton.onclick=removeParent;

        
        

    }
};


//AGREGAR A LA LISTA
//1) Haciendo click en el boton enter
enter.addEventListener("click", clickeando);

//2) Apretando enter en el teclado (13 es el keycode de enter)
input.addEventListener("keydown",apEnter);

//CLICK EN LI Y SE TACHAN:

//Con .target lo que hago es delegar el evento a los li dentro de ul
function tachar(evento){
    evento.target.classList.toggle("done");
}

ul.addEventListener("click",tachar);


//BOTONES DE DELETE

function botonBorrar(){
    var boton = document.createElement("button");
    boton.appendChild(document.createTextNode("Borrar"));
    li[i].appendChild(boton);
    // .onclik me ejecuta lo que le ponga despues del igual
    boton.onclick=removeParent;
}

function removeParent(evento){
    // .parentNode aplico el metodo al parent y con .target lo delego al li porque en realidad el evento esta aplicado al button
	evento.target.parentNode.remove();
}

for ( var i = 0; i < li.length; i++){
    botonBorrar();
}