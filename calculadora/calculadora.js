let currentOperand = '0';
let previousOperand = '';
let operation = null;

const display = document.querySelector('.display');
const themeSwitch = document.querySelector('#theme-switch');
const body = document.body;

function updateDisplay() {
  display.textContent = currentOperand;
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return; 
  if (currentOperand === '0' && number !== '.') {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate(); 
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculate() {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        currentOperand = 'Erro'; // Evitar divisão por zero
        updateDisplay();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  // Ajustando o número de casas decimais para 2
  currentOperand = result.toFixed(2).toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function deleteNumber() {
  currentOperand = currentOperand.slice(0, -1);
  if (currentOperand === '') currentOperand = '0';
  updateDisplay();
}

function clearScreen() {
  currentOperand = '0';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

// Função para alternar o tema
function toggleTheme() {
  body.classList.toggle('theme-dark');
  body.classList.toggle('theme-light');
}

updateDisplay();

window.appendNumber = appendNumber;
window.chooseOperation = chooseOperation;
window.calculate = calculate;
window.deleteNumber = deleteNumber;
window.clearScreen = clearScreen;
window.toggleTheme = toggleTheme;
