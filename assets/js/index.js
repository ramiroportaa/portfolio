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

//Datos de skills
const skillsListData = [
    {title: "HTML5", stars: 4.5, imgSrc: "./assets/img/logo-html.png"},
    {title: "CSS3", stars: 3.5, imgSrc: "./assets/img/logo-css.png"},
    {title: "JAVASCRIPT", stars: 4, imgSrc: "./assets/img/logo-js.png"},
    {title: "BOOTSTRAP", stars: 3.5, imgSrc: "./assets/img/logo-bootstrap.png"},
    {title: "SASS", stars: 2.5, imgSrc: "./assets/img/logo-sass.png"},
    {title: "NODE JS", stars: 4, imgSrc: "./assets/img/logo-nodejs.png"},
    {title: "REACT", stars: 3, imgSrc: "./assets/img/logo-react.png"},
    {title: "EXPRESS", stars: 4, imgSrc: "./assets/img/logo-express.png"},
    {title: "MONGO DB", stars: 2, imgSrc: "./assets/img/logo-mongodb.png"},
    {title: "GIT", stars: 3.5, imgSrc: "./assets/img/logo-git.png"},
    {title: "REACT NATIVE", stars: 2, imgSrc: "./assets/img/logo-reactNative.png"},
    {title: "JAVA", stars: 3.5, imgSrc: "./assets/img/logo-java.png"},
    {title: "SPRING", stars: 3, imgSrc: "./assets/img/logo-spring.png"},
]
const skillsList = document.getElementById("skills-list");
skillsList.innerHTML = "";
const starsToHTML = (stars=1)=>{
    let max = 5;
    let html = "";
    for (let index = 1; index <= Math.floor(stars); index++) {
        html+=`<li class="list-inline-item m-0"><i class="fas fa-star small"></i></li>`;
        max--;
    }
    if (stars.toString().endsWith(".5")) {
        html+=`<li class="list-inline-item m-0"><i class="fas fa-star-half-alt small"></i></li>`;
        max--;
    }
    for (let index = 1; index <= max; index++) {
        html+=`<li class="list-inline-item m-0"><i class="far fa-star small"></i></li>`;
    }

    return html;
}
skillsListData.forEach((skill, index) => {
    
    const div = document.createElement("div");
    div.className = "col-6 col-sm-4 col-lg-2 d-flex justify-content-center";
    if (index == 6) div.classList.add("ms-lg-1");
    if (index == 10) div.classList.add("me-lg-1"); 
    div.innerHTML = `
        <div data-tilt data-tilt-reverse="true" data-tilt-scale="1.1" class="hexagon">
            <div class="hexagon-1">
                <div class="hexagon-2 card p-4">
                    <div class="card__hover text-dark">
                        <p class="m-0">${skill.title.toUpperCase()}</p>
                        <ul class="list-inline text-warning">
                            ${starsToHTML(skill.stars)}
                        </ul>
                    </div>
                    <img class="d-block m-auto img-fluid" src="${skill.imgSrc}" alt="${skill.title}">
                </div>
            </div>
        </div>
    `;
    skillsList.appendChild(div);
    if (((index+1) % 3 == 1) && (index == skillsListData.length-1)){
        skillsList.innerHTML+='<div class="d-sm-none col-6 col-sm-4 col-lg-2 d-flex justify-content-center"></div>';
    }
})

//Datos de formacion programacion.
const formacionProgramacionData = [
    {title: "DESARROLLO FRONTEND REACT", year: 2021, academy:"CoderHouse", isFinished: true, logoSrc: "./assets/img/training-coder.png", certSrc: "./assets/img/Cert-Desarrollo-Frontend-React.png"},
    {title: "Principiante en programación", year: 2022, academy:"Alura", isFinished: true, logoSrc: "./assets/img/training-alura.webp", certSrc: "./assets/img/Cert-Principiante-en-programacion.jpg"},
    {title: "Formación Frontend", year: 2022, academy:"Alura", isFinished: true, logoSrc: "./assets/img/training-alura.webp", certSrc: "./assets/img/Cert-Formacion-Frontend.jpg"},
    {title: "Programación Backend", year: 2022, academy:"CoderHouse", isFinished: true, logoSrc: "./assets/img/training-coder.png", certSrc: "./assets/img/Cert-Desarrollo-Backend-NodeJs.png"},
    {title: "Programación Web FullStack", year: 2023, academy:"Egg Cooperation + Universidad Nacional de San Juan", isFinished: true, logoSrc: "./assets/img/training-UNSJ.jpg", certSrc: "./assets/img/Cert-Programacion-FullStack.jpg"},
    {title: "Desarrollo de aplicaciones", year: 2023, academy:"CoderHouse", isFinished: false, logoSrc: "./assets/img/training-coder.png", certSrc: ""},
]
const formacionProgramacion = document.getElementById("formacion-programacion");
formacionProgramacion.innerHTML = "";
formacionProgramacionData.forEach((curso, index) => {
    
    const rellenarModal = ()=>{
        if (curso.isFinished){
            if (curso.certSrc) return `<img class="img-fluid" src=${curso.certSrc} alt=${curso.title}>`;
            return "<p>El certificado aun no esta disponible para ser visualizado.</p>"
        }
        return "<p>Aún no he finalizado la carrera o curso por lo que el certificado no esta disponible :(</p>";
    }
    const div = document.createElement("div");
    div.className = "col-lg-3 col-6 col-md-4 my-1";
    div.innerHTML = `
        <div class="box d-flex justify-content-center align-items-center">
            <img data-tilt data-tilt-scale="1.05" class="w-75" src=${curso.logoSrc} alt=${curso.academy} data-bs-toggle="modal" data-bs-target="#box${index}">
        </div>
        <div class="w-100">
            <p class="m-0 mt-3 text-uppercase">${curso.title} <br> ${curso.isFinished ? "[FINALIZADO]" : "[EN CURSO]"}</p>
            <p>${curso.year} | ${curso.academy}</p>
        </div>
        <div class="modal fade" id="box${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Certificado</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${rellenarModal()}
                    </div>
                </div>
            </div>
        </div>
    `;
    formacionProgramacion.appendChild(div);
})

//Datos de proyectos.
const projectsData = [
    {title: "Web estática para productor asesor de seguros", description:'Proyecto Final de curso "Desarrollo web" | CoderHouse', repoLink: "https://github.com/ramiroportaa/sywporta-seguros", demoLink:"https://ramiroportaa.github.io/sywporta-seguros/", imgSrc: "./assets/img/projects-sywporta.jpg", skillsUsed: ["html5", "css3", "bootstrap", "sass"]},
    {title: "Simulador de e-shop de indumentaria", description:'Proyecto Final de curso "Javascript" | CoderHouse" | CoderHouse', repoLink: "https://github.com/ramiroportaa/proyectoFinal-JS", demoLink:"https://ramiroportaa.github.io/proyectoFinal-JS/", imgSrc:"./assets/img/projects-eshop-js.jpg", skillsUsed: ["javascript", "html5", "css3", "bootstrap", "sass"]},
    {title: "Página web estática para emprendimiento de mates", description:'Participación en proyecto Real | CoderHouse', repoLink: "https://github.com/ramiroportaa/Glam-Mates", demoLink:"https://ramiroportaa.github.io/Glam-Mates/", imgSrc:"./assets/img/projects-glam.jpg", skillsUsed: ["html5", "css3", "bootstrap", "javascript"]},
    {title: "E-commerce de indumentaria en REACTJS", description:'Proyecto Final de curso "REACTJS" | CoderHouse', repoLink: "https://github.com/ramiroportaa/HeyBro-Porta", demoLink:"https://github.com/ramiroportaa/HeyBro-Porta", imgSrc:"./assets/img/projects-react.gif", skillsUsed: ["react", "javascript", "html5", "css3", "bootstrap"]},
    {title: "Encriptador y desencriptador", description:'Challenge del curso "Principiante en programación" | Alura', repoLink: "https://github.com/ramiroportaa/encriptador-challenge", demoLink:"https://ramiroportaa.github.io/encriptador-challenge/", imgSrc:"./assets/img/projects-encriptador.jpg", skillsUsed: ["html5", "css3", "bootstrap", "javascript"]},
    {title: "Juego del Ahorcado", description:'Challenge del curso "Principiante en programación" | Alura', repoLink: "https://github.com/ramiroportaa/challenge-ahorcado", demoLink:"https://ramiroportaa.github.io/challenge-ahorcado/", imgSrc:"./assets/img/projects-ahorcado.gif", skillsUsed: ["html5", "css3", "javascript"]},
    {title: "Mini-desafio de chat con websocket", description:'Desafio del curso "Backend" | Coderhouse', repoLink: "https://github.com/ramiroportaa/websocket-chat", demoLink:"https://torch-political-prince.glitch.me/", imgSrc:"./assets/img/projects-chat.png", skillsUsed: ["html5", "css3", "bootstrap", "javascript", "node"]},
    {title: "Página web estática para emprendimiento", description:'Participación en proyecto Real | CoderHouse" | Alura', repoLink: "https://github.com/ramiroportaa/aurora-santeria", demoLink:"https://ramiroportaa.github.io/aurora-santeria/", imgSrc:"./assets/img/projects-aurora.jpg", skillsUsed: ["html5", "css3", "javascript", "bootstrap"]},
]
const renderSkillsUsed = (SkillsUsedArray) => {
    let html = "";
    SkillsUsedArray.forEach((skill, index)=>{
        switch (skill) {
            case "html5":
                html+=`<i class="fa-brands fa-html5 ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "css3":
                html+=`<i class="fa-brands fa-css3-alt ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "bootstrap":  
                html+=`<i class="fa-brands fa-bootstrap ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "sass":
                html+=`<i class="fa-brands fa-sass ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "react":
                html+=`<i class="fa-brands fa-react ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "javascript":
                html+=`<i class="fa-brands fa-js-square ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            case "nodejs":
                html+=`<i class="fa-brands fa-node ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
            default:
                html+=`<i class="fa-brands fa-${skill} ${(index == 0 ? "me-2" : "mx-2")}"></i>`;
                break;
        }
    })
    return html;
}

const projectsList = document.getElementById("projects-list");
projectsList.innerHTML = "";
projectsData.forEach((project, index) => {
    
    const div = document.createElement("div");
    div.className = "row mt-5";
    div.innerHTML = `
            <div class="col-lg-8 ${((index+1) % 2 == 0) ? "order-lg-1" : ""}">
                <img class="img-fluid" src=${project.imgSrc} alt=${project.title}>
            </div>
            <div class="col-lg-4 d-block m-lg-auto mt-3">
                <h4 class="fw-bold">${project.title}</h4>
                <p>${project.description}</p>
                <div class="d-flex mb-3 display-6">
                    ${renderSkillsUsed(project.skillsUsed)}
                </div>
                <div>
                    <button class="btn btn-outline-light"><a href=${project.repoLink}
                        target="_blank" rel="noopener noreferrer">Repositorio</a></button>
                    <button class="btn btn-danger"><a href=${project.demoLink} target="_blank"
                        rel="noopener noreferrer">Ver demo</a></button>
                </div>
            </div>
    `;
    projectsList.appendChild(div);
})


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