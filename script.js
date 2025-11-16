// ===========================
// LÓGICA DEL ACCESO
// ===========================
function checkPassword() {
    const passInput = document.getElementById("password");
    const error = document.getElementById("error");
    const chatBox = document.getElementById("chat");
    
    if (passInput.value === "LASER2025") {
        chatBox.value = "Acceso concedido. Podés hablar con Lisa.\n";
        error.innerText = "";
    } else {
        error.innerText = "Contraseña incorrecta.";
        chatBox.value = "";
    }
}

// ===========================
// ENVÍO DE MENSAJES DEL CHAT
// ===========================
function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    if (input.value.trim() === "") return;

    // Mostrar mensaje del usuario
    chat.value += "Usuario: " + input.value + "\n";

    // Respuesta provisoria de Lisa
    chat.value += "Lisa: Estoy lista para ayudarte. (Esto cambiará cuando conectemos tu GPT)\n\n";

    // Scroll automático
    chat.scrollTop = chat.scrollHeight;

    // Limpiar input
    input.value = "";
}
