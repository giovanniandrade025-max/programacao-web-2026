const forms = document.querySelector('#form'); // Pega o forms
const nome = document.querySelector('#nome-usuario'); // Pega o nome do forms
const texto = document.querySelector('#curiosidade-usuario'); // Pega o texto que o usuário digitou, a curiosidade

forms.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Impede que a pag atualize
    if (!nome.value.trim()) { // Verifica se o nome está vazio
        alert('Nome inválido! Digite algo.')
        return  
    } else if (!texto.value.trim()) { // Verifica se o texto está vazio
        alert('Digite algo válido!')
        return
    }

    forms.innerHTML = '<p>Formulário enviado com sucesso!</p>'; // Injeta uma tag HTML no .document
    forms.style.backgroundColor = "#1a0000"; // Muda o CSS
    forms.style.border = "2px solid #ff3333";
    forms.style.textAlign = "center";

});