const btnLogin = document.getElementById("btnLogin");
const campEmail = document.getElementById("email");
const campSenha = document.getElementById("senha");

btnLogin.addEventListener("click", (event) => {
    // 1. Impede a página de recarregar
    event.preventDefault();

    // 2. Busca o usuário no localStorage
    const dadosSalvos = localStorage.getItem("usuario");

    // 3. Verifica se existe alguém cadastrado
    if (!dadosSalvos) {
        alert("Nenhum usuário encontrado! Cadastre-se primeiro.");
        return;
    }

    // 4. Converte a string do banco para Objeto
    const user = JSON.parse(dadosSalvos);

    // 5. Validação
    if (campEmail.value === user.email && campSenha.value === user.senha) {
        alert("Login realizado com sucesso! Redirecionando...");
        location.href = "./pages/home.html"; 
    } else {
        alert("E-mail ou senha incorretos.");
    }
});