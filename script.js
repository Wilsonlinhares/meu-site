function saudarUsuario() {
    const nome = document.getElementById("nomeUsuario").value;
    const mensagem = document.getElementById("mensagemPersonalizada");
  
    if (nome.trim() === "") {
      mensagem.textContent = "Por favor, digite seu nome.";
    } else {
      mensagem.textContent = `Olá, ${nome}! Seja bem-vindo ao seu primeiro app! 🎉`;
    }
  }
  