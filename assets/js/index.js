//Activar y desactivar "tilt" segun tamaño de pantalla.
const tiltScriptSrc = "./assets/js/vanilla-tilt.min.js";
function addScript(src) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", src);
    document.body.appendChild(script);
}
function isMobile() { 
    if (window.screen.width < 575) return true;
    return false;
}
if (!isMobile()){
    addScript(tiltScriptSrc);
    const hexagons = document.querySelectorAll(".hexagon__list > div");
    hexagons.forEach(element => element.classList.add("tilt"));
}

//Efecto maquina de escribir (typewriter) en titulo.
const title = document.querySelector(".typewriter");
const writing = element =>{
    let i = 0;
    let str = element.textContent;
    const arrStr = str.split("");
    element.textContent = "";
    const printStr = setInterval(()=>{
        element.textContent += arrStr[i];
        i++;
        if (i == str.length){
            setTimeout(writing, 5000, element);
            clearInterval(printStr);
        };
    },80)
}
writing(title);