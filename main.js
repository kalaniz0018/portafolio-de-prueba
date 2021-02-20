//Encontrar elementos de html con JavaScript 
/*por etiquieta, clase o ID*/
//etiqueta => me va a leer de arriba hacia abajo 
//clase => idem 
//ID => poner el id en la etiqueta

var isMenuActive = false;

function mostrarMenu(){
    const menu = window.document.getElementById("menu");
    if(isMenuActive){
        menu.classList.remove("menu-active");
       // isMenuActive = false;
    }else{
        menu.classList.add("menu-active");
        //isMenuActive = true;
    }
    isMenuActive = ! isMenuActive;
}


