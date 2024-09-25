document.getElementById("calculateBtn").addEventListener("click", function() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;
    let expressions = []; // Para armazenar as expressões

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
        expressions.push(`SOMA = SOMA + ${K} => ${SOMA}`); // Adiciona a expressão
    }

    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `O valor final de SOMA é: ${SOMA}`;
    resultBox.style.display = "block"; // Exibe o box de resultados

    const expressionsBox = document.getElementById("expressionsBox");
    expressionsBox.innerHTML = expressions.join("<br>"); // Mostra as expressões
    expressionsBox.style.display = "block"; // Exibe as expressões
});
