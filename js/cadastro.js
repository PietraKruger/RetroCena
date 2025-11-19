let campEmail = document.getElementById("email") ;
const campSenha = document.getElementById("senha") ;
const btnCadastrar = document.getElementsByClassName("btn-cadastrar") ;
const btnPaglogin = document.getElementsByClassName("btn-pagLogin")

btnCadastrar.addEventListener("click" , function() {
    window.location.assign("/pages/home.html") 
})