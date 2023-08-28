document.addEventListener("DOMContentLoaded", function() {
    // obteniendo los elementos del DOM
    const BtnChangeTheme = document.getElementById("btn");
    const body = document.getElementsByTagName("body")[0];
    const h1 = document.querySelector(".container__h1");
    const h3 = document.querySelector(".container__h3");
    const h3b = document.querySelector(".h3-b");
    const p = document.querySelector(".container__p");
  
    // cambiando los colores con una funcion
    const ChangeBackground = () => {
      if (body.style.backgroundColor == "rgb(255, 255, 255)") {
        BtnChangeTheme.value = "Change to Ligth Theme"
        body.style.backgroundColor = "rgb(46, 60, 92)";
        BtnChangeTheme.style.color = "#000";
        BtnChangeTheme.style.backgroundColor = "#fff";
        h1.style.color = "#fff";
        h3.style.color = "#000";
        h3b.style.color = "#000";
        h3.style.backgroundColor = "rgb(255, 255, 204)";
        h3b.style.backgroundColor = "rgb(255, 255, 204)";
        p.style.color = "#fff";
      } else {
        BtnChangeTheme.value = "Change to Dark Theme"
        body.style.backgroundColor = "rgb(255, 255, 255)";
        BtnChangeTheme.style.color = "rgb(238, 243, 252)";
        BtnChangeTheme.style.backgroundColor = "rgb(46, 60, 92)";
        h1.style.color = "#000";
        h3.style.color = "#000";
        h3b.style.color = "#000";
        h3.style.backgroundColor = "rgba(149, 177, 228, .5)";
        h3b.style.backgroundColor = "rgba(149, 177, 228, .5)";
        p.style.color = "#000"
      }
    };
  
    // estableciendo la condicion
    BtnChangeTheme.onclick = ChangeBackground;
  });