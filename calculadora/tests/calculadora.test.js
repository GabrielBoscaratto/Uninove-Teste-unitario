describe('Calculadora', () => {
    let appendNumber, chooseOperation, calculate, deleteNumber, clearScreen, display;
  
    beforeEach(() => {
      appendNumber = (num) => {
        // Verifica se o número é um ponto e se já existe um ponto no número
        if (num === '.' && display.textContent.includes('.')) {
          return; // Impede que mais de um ponto seja adicionado
        }
        display.textContent += num; // Caso contrário, adiciona o número
      };
      chooseOperation = (operation) => {
        display.textContent += ` ${operation} `;
      };
      calculate = () => {
        display.textContent = eval(display.textContent.replace(/[^0-9+\-*/.]/g, "")); 
        display.textContent = parseFloat(display.textContent).toFixed(2); 
      };
      deleteNumber = () => {
        display.textContent = display.textContent.slice(0, -1);
      };
      clearScreen = () => {
        display.textContent = '0';
      };
  
      display = document.createElement('div');
      display.classList.add('display');
      document.body.appendChild(display);
    });
  
    afterEach(() => {
      document.body.innerHTML = '';
    });
  
    test('Deve adicionar números corretamente', () => {
      appendNumber('5');
      expect(display.textContent).toBe('5');
      appendNumber('3');
      expect(display.textContent).toBe('53');
    });
  
    test('Deve evitar múltiplos pontos no número', () => {
      appendNumber('5');
      appendNumber('.');
      appendNumber('.');
      expect(display.textContent).toBe('5.');
    });
  
    test('Deve realizar adição corretamente', () => {
      appendNumber('3');
      chooseOperation('+');
      appendNumber('5');
      calculate();
      expect(display.textContent).toBe('8.00');
    });
  
    test('Deve realizar subtração corretamente', () => {
      appendNumber('9');
      chooseOperation('-');
      appendNumber('4');
      calculate();
      expect(display.textContent).toBe('5.00');
    });
  
    test('Deve realizar multiplicação corretamente', () => {
      appendNumber('3');
      chooseOperation('*');
      appendNumber('4');
      calculate();
      expect(display.textContent).toBe('12.00');
    });
  
    test('Deve realizar divisão corretamente', () => {
      appendNumber('8');
      chooseOperation('/');
      appendNumber('2');
      calculate();
      expect(display.textContent).toBe('4.00');
    });
  
    test('Deve limpar a tela corretamente', () => {
      appendNumber('5');
      clearScreen();
      expect(display.textContent).toBe('0');
    });
  
    test('Deve apagar o último número corretamente', () => {
      appendNumber('5');
      appendNumber('3');
      deleteNumber();
      expect(display.textContent).toBe('5');
    });
  
    test('Não deve adicionar números após o primeiro número ser apagado', () => {
      appendNumber('5');
      deleteNumber();
      appendNumber('3');
      expect(display.textContent).toBe('3');
    });
  });
  