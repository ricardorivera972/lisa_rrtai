// === LÓGICA DE LISA ===

// Contraseña correcta
const PASSWORD = "LASER2025";

// Validar contraseña y desbloquear interfaz
function validatePassword() {
    const passInput = document.getElementById("password");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const chat = document.getElementById("chat");
    const error = document.getElementById("error");

    if (passInput.value === PASSWORD) {
        // Desbloquear campos
        userInput.disabled = false;
        sendBtn.disabled = false;
        passInput.disabled = true;
        error.innerText = "";

        // Mostrar acceso correcto
        chat.value = "Acceso concedido. Podés hablar con Lisa.\n";
    } else {
        error.innerText = "Contraseña incorrecta.";
    }
}

// Enviar mensaje
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    if (userInput.value.trim() === "") return;

    // Agregar mensaje al chat
    chat.value += "Usuario: " + userInput.value + "\n";

    // Borrar input
    userInput.value = "";

    // Respuesta provisional
    chat.value += "Lisa: (respuesta aparecerá cuando conectemos el backend)\n";
}
