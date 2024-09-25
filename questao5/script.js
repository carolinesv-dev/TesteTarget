document.getElementById("instructions").innerText = 
    "Você está em uma sala com três interruptores. " +
    "Use duas idas até as salas das lâmpadas para descobrir qual interruptor controla cada lâmpada. " +
    "Como você faria isso?";

document.getElementById("revealBtn").addEventListener("click", function() {
    const answer = 
        "1. Ligue o primeiro interruptor e deixe-o ligado por 10 minutos. \n" +
        "2. Depois, desligue o primeiro interruptor e ligue o segundo. \n" +
        "3. Vá até as salas das lâmpadas:\n\n" +
        "- A lâmpada que estiver acesa é do segundo interruptor.\n" +
        "- A lâmpada que estiver apagada, mas quente, é do primeiro interruptor.\n" +
        "- A lâmpada que estiver apagada e fria é do terceiro interruptor.";

    const resultBox = document.getElementById("resultBox");
    resultBox.innerText = answer;
    resultBox.style.display = "block"; // Exibe o box de resultados
});
