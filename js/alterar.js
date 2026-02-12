campNome.value


function editarPerfil(event) {
    event.preventDefault();

    // 1. PRIMEIRO: Busca o usuário atual do localStorage
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    // Se não existir usuário, não há o que editar
    if (!usuario) {
        alert("Usuário não encontrado!");
        return;
    }

    // 2. ABRE OS PROMPTS (Usando os dados atuais como padrão)
    const novoNome = prompt("Digite o novo nome:", usuario.nome || "");
    if (novoNome !== null && novoNome.trim() !== "") {
        usuario.nome = novoNome.trim();
    }

    const novoEmail = prompt("Digite o novo email:", usuario.email || "");
    if (novoEmail !== null && novoEmail.trim() !== "") {
        usuario.email = novoEmail.trim();
    }

    const novaSenha = prompt("Digite a nova senha:", usuario.senha || "");
    if (novaSenha !== null && novaSenha.trim() !== "") {
        usuario.senha = novaSenha.trim();
    }

    // 3. SALVA DE VOLTA NO LOCALSTORAGE
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // 4. ATUALIZA A TELA E AVISA O USUÁRIO
    atualizarTela();
    alert("Perfil atualizado com sucesso!");
}

function atualizarTela() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) return;

    const campos = document.querySelectorAll(".mutavel");

    if (campos.length >= 3) {
        campos[0].textContent = usuario.nome || "Não informado";
        campos[1].textContent = usuario.email || "Não informado";
        campos[2].textContent = usuario.senha || "Não informado";
    }
}


// Executa automaticamente quando a página carrega
window.onload = atualizarTela;

function excluirPerfil(event) {
    event.preventDefault();

    const confirmar = confirm("Tem certeza que deseja excluir seu perfil permanentemente?");

    if (confirmar) {
        // Remove apenas o usuário salvo
        localStorage.removeItem("usuario");

        alert("Perfil excluído com sucesso!");

        // Redireciona para a tela de cadastro
        window.location.href = "./cadastro.html"; 
        // ⚠️ Coloque o nome correto da sua página de cadastro aqui
    }
}
