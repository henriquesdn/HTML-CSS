const navButton = document.querySelectorAll(".navButton");
const sendButton = document.querySelector(".sendButton");
const developer = document.querySelector(".developer");

/* Muda a cor dos botões da barra de navegação ao passar o mouse por cima */
for (let i = 0; i < navButton.length; i++) {
    navButton[i].addEventListener("mouseover", () => navButton[i].style.color = "#8d021f");
}

for (let i = 0; i < navButton.length; i++) {
    navButton[i].addEventListener("mouseout", () => navButton[i].style.color = "#d21f3c");
}

/* Muda a cor do botão de envio ao passar o mouse por cima */
sendButton.addEventListener("mouseover", () => sendButton.style.backgroundColor = "grey");
sendButton.addEventListener("mouseout", () => sendButton.style.backgroundColor = "white");

/* Exibe alerta avisando quando o formulário é enviado */
const formSent = function () {
    alert("Formulário enviado!");
}