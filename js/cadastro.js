const campEmail = document.getElementById("email");
const campSenha = document.getElementById("senha");
const btnCadastrar = document.getElementById("btn-cadastrar");

// Remova a criação do objeto 'usuario' e o 'setItem' daqui de cima, 
// pois eles rodam antes do usuário digitar qualquer coisa.

btnCadastrar.addEventListener("click", () => {
    // 1. Captura os valores no momento do clique
    const usuario = {
        email: campEmail.value,
        senha: campSenha.value,
    };

    // 2. Salva no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // const user = localStorage.getItem("usuario")

    // if (campEmail.value === user.email && campSenha.value === user.senha) {
    //     // logica p-ra fazer login
    // } else {
    //     alert("usuario ou senha invválida")
    // }

    // 3. Redireciona para a home
    location.href = "./home.html";
});         