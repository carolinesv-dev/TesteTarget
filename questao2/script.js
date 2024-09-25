document.getElementById("textForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const inputText = document.getElementById("inputText").value;
  const countA = (inputText.match(/a/gi) || []).length; // Contagem de 'a' e 'A'

  const resultBox = document.getElementById("resultBox");
  if (countA > 0) {
      resultBox.innerHTML = `A letra 'a' aparece ${countA} vez(es) no texto.`;
  } else {
      resultBox.innerHTML = "A letra 'a' não aparece no texto.";
  }
  resultBox.style.display = "block"; // Exibe o box de resultados
});
