

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(event) {
    // 1. Impede o recarregamento da página
    event.preventDefault();

    // 2. Captura os valores dos inputs
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // 3. Validação de preenchimento
    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return; 
    }

    // 4. Lógica de Autenticação (Exemplo)
    // Aqui você define quem pode entrar
    if (nome === "admin" && senha === "1234") {
        
        // Salva o nome do usuário para usar na próxima página
        localStorage.setItem("usuarioLogado", nome);

        console.log("Login autorizado para:", nome);
        alert("Login realizado com sucesso!");

        // 5. Redirecionamento
        window.location.href = "pages/home.html"; 

    } else {
        // Se o nome ou senha estiverem errados
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});