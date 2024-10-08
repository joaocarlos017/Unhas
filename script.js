document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    document.getElementById('form-contato').reset(); // Limpa o formulário após o envio
});
