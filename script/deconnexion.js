let btnDeconnexion = document.querySelector("#deconnexion");

btnDeconnexion.addEventListener("click",(e)=>{
    e.preventDefault();
    sessionStorage.removeItem("email");
    document.location.href = "index.html";
})