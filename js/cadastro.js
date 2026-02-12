const campEmail = document.getElementById("email");
const campSenha = document.getElementById("senha");
const btnCadastrar = document.getElementById("btn-cadastrar");

btnCadastrar.addEventListener("click", (event) => {
    event.preventDefault();

    // LISTA DE NOMES ALEATÓRIOS
    const nomesAleatorios = ['Alex', 'Joanna', 'Lucas', 'Pietra', 'Richard', 'Sarah' , 'Édio'];
    
    // SORTEANDO UM NOME
    const nomeSorteado = nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];

    const usuario = {
        nome: nomeSorteado, // O site dá o nome automaticamente aqui
        email: campEmail.value.trim(),
        senha: campSenha.value.trim()
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    location.href = "./home.html";
});

const novoNome = prompt("Digite o novo nome:", usuario.nome || "");
// O 'usuario.nome' aqui já será o nome aleatório que o site deu!

// No cadastro:
const nomeParaSalvar = campNome.value.trim() || nomeSorteado;
           