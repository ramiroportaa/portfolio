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