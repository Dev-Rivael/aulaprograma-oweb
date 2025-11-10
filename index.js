// Espera o DOM carregar antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

  // Captura o formulário
  const form = document.querySelector("form");

  // Quando o formulário for enviado
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio automático da página

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const data = document.getElementById("data").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação básica
    if (!nome || !cpf || !data || !email || !telefone || !endereco || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Validação simples de CPF (apenas formato e tamanho)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert("CPF inválido! Use o formato 000.000.000-00");
      return;
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido.");
      return;
    }

    // Validação básica de telefone
    const telRegex = /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/;
    if (!telRegex.test(telefone)) {
      alert("Telefone inválido! Exemplo: (11) 91234-5678");
      return;
    }

    // Simula o envio do formulário (poderia ser enviado via fetch/AJAX)
    alert("Formulário enviado com sucesso! Obrigado por entrar em contato, " + nome + ".");

    // Limpa os campos após envio
    form.reset();
  });
});