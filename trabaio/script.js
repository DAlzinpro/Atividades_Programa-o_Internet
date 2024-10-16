const buttons = document.querySelectorAll('.btn');
const output = document.getElementById('output');
let currentInput = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      result = '';
      output.textContent = '0';
    } else if (value === '=') {
      try {
        let expression = currentInput;

        // Substitui a raiz quadrada por Math.sqrt()
        expression = expression.replace(/√(\d+(\.\d+)?)?/g, 'Math.sqrt($1)');

        // Substitui a potenciação por **
        expression = expression.replace(/\^/g, '**');

        result = eval(expression);
        output.textContent = result;
        currentInput = result.toString();
      } catch {
        output.textContent = 'Error';
        currentInput = '';
      }
    } else if (value === '√') {
      currentInput += '√';
      output.textContent = currentInput;
    } else {
      currentInput += value;
      output.textContent = currentInput;
    }
  });
});
