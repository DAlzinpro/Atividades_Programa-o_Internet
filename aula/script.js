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
        result = eval(currentInput);
        output.textContent = result;
        currentInput = result;
      } catch {
        output.textContent = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value;
      output.textContent = currentInput;
    }
  });
});
