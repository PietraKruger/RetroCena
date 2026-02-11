const user = localStorage.getItem("usuario")

    if (campEmail.value === user.email && campSenha.value === user.senha) {
        // logica p-ra fazer login
    } else {
        alert("usuario ou senha invválida")
    }