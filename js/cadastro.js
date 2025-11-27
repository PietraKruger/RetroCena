let campEmail = document.getElementById("email");
const campSenha = document.getElementById("senha");
const btnCadastrar = document.getElementsByClassName("btn-cadastrar");
const btnPaglogin = document.getElementsByClassName("btn-pagLogin")


const usuario = {
    "email": campEmail.value,
    "senha": campSenha.value,
}

localStorage.setItem("usuario", JSON.stringify(usuario));


btnCadastrar.addEventListener("click", function () {
    window.location.assign("/pages/home.html")
})