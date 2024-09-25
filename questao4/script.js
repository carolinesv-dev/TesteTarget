document.getElementById("sequences").innerHTML = `
    <p>a) 1, 3, 5, 7, __</p>
    <p>b) 2, 4, 8, 16, 32, 64, __</p>
    <p>c) 0, 1, 4, 9, 16, 25, 36, __</p>
    <p>d) 4, 16, 36, 64, __</p>
    <p>e) 1, 1, 2, 3, 5, 8, __</p>
    <p>f) 2, 10, 12, 16, 17, 18, 19, __</p>
`;

document.getElementById("calculateBtn").addEventListener("click", function() {
    const results = [
        "a) 9 = Sequência de números ímpares",
        "b) 128 = Potências de 2",
        "c) 49 = Quadrados perfeitos",
        "d) 100 = Quadrados perfeitos (2², 4², 6², 8²)",
        "e) 13 = Sequência de Fibonacci",
        "f) 20 = Sequência com incremento"
    ];

    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = results.join("<br>");
    resultBox.style.display = "block"; // Exibe o box de resultados
});
