document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou um serviço de e-mail

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
    document.getElementById("contato-form").reset(); // Reseta o formulário
});
