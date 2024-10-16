// Usa o queryselector para selecional todos botões com a classe "btn"
const buttons = document.querySelectorAll('.btn');
// Seleciona o id da saída para mostrar a saida
const output = document.getElementById('output');
// Inicia as variaveis
let currentInput = '';
let result = '';
// Aqui é usado forEach para usar a lista de botões
buttons.forEach(button => {
  //Cria um escutador com "click"
  button.addEventListener('click', () => {
    //Inicia a variavel value pegando o valor do texto do botão
    const value = button.textContent;
    // Limpa o campo se o usuario clicar em C
    if (value === 'C') {
      currentInput = '';
      result = '';
      output.textContent = '0';
    // Se o botão = for apertado realiza as operacoes
    } else if (value === '=') {
      try {
        let expression = currentInput;

        // Substitui a raiz quadrada por Math.sqrt()
        expression = expression.replace(/√(\d+(\.\d+)?)?/g, 'Math.sqrt($1)');

        // Substitui a potenciação por **
        expression = expression.replace(/\^/g, '**');
        // realiza a operação utilizando eval
        result = eval(expression);
        // Mostra o resultado
        output.textContent = result;
        // Guarda o resultado como nova entrada
        currentInput = result.toString();
      } 
      // se der erro mostra Error na saida e limpa a entrada
      catch {
        output.textContent = 'Error';
        currentInput = '';
      }
      // Se o botão for '√', adiciona a raiz quadrada à entrada
    } else if (value === '√') {
      currentInput += '√';
      output.textContent = currentInput; // Atualiza a saida com a nova entrada
    }    // Para qualquer outro botão, adiciona seu valor à entrada
    else {
      currentInput += value;
      output.textContent = currentInput;// Atualiza a saida
    }
  });
});
