function fibonacci(n) {
  let fib = [0, 1];
  while (true) {
      let next = fib[fib.length - 1] + fib[fib.length - 2];
      if (next > n) break;
      fib.push(next);
  }
  return fib;
}

function isFibonacci(num) {
  const fibSequence = fibonacci(num);
  return fibSequence.includes(num);
}

function mostrarResultado(mensagem) {
  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = mensagem;
  resultBox.style.display = "block"; // Exibe o box
}

document.getElementById("fibonacciForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio do formulário

  const inputNumber = document.getElementById("inputNumber").value;
  const number = parseInt(inputNumber);

  if (isNaN(number)) {
      mostrarResultado("Por favor, insira um número válido.");
      return;
  }

  if (isFibonacci(number)) {
      mostrarResultado(`${number} pertence à sequência de Fibonacci.`);
  } else {
      mostrarResultado(`${number} não pertence à sequência de Fibonacci.`);
  }

  // Limpa o campo após a verificação
  document.getElementById("inputNumber").value = '';
});
