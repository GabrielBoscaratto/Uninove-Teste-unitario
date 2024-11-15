# Calculadora com Testes Unitários em JavaScript

Este projeto implementa uma calculadora simples em JavaScript com uma suíte de testes unitários para garantir sua funcionalidade. A calculadora oferece as operações básicas de adição, subtração, multiplicação e divisão, além de funções de limpar a tela e apagar o último número digitado.

## Funcionalidades

* **Adição:** Soma dois números.
* **Subtração:** Subtrai dois números.
* **Multiplicação:** Multiplica dois números.
* **Divisão:** Divide dois números.
* **Ponto Decimal:** Permite a inserção de números decimais.
* **Limpar Tela (C):** Limpa o display da calculadora.
* **Apagar Número (DEL):** Apaga o último dígito inserido.
* **Alternância de Tema:** Permite alternar entre temas claro e escuro.

## Testes Unitários

Os testes unitários foram escritos utilizando o framework Jest para garantir a qualidade do código e a corretude das operações. Os testes cobrem os seguintes cenários:

* Adição de números.
* Impedir múltiplos pontos decimais em um mesmo número.
* Operações básicas (adição, subtração, multiplicação e divisão).
* Limpar a tela.
* Apagar o último número.
* Prevenir a adição de números após o primeiro número ser apagado.


## Estrutura do Projeto

* **`calculadora.js`**: Contém a lógica da calculadora, incluindo as funções para realizar as operações, atualizar o display e manipular os eventos dos botões.
* **`calculadora.test.js`**: Contém os testes unitários escritos com Jest.
* **`index.html`**: Arquivo HTML que define a interface da calculadora e importa o arquivo JavaScript.

## Como Executar os Testes

1. Certifique-se de ter o Node.js e o npm (ou yarn) instalados em seu sistema.
2. Navegue até o diretório do projeto no terminal.
3. Instale as dependências do projeto com o comando: `npm install` ou `yarn install`
4. Execute os testes com o comando: `npm test` ou `yarn test`.

## Como Usar a Calculadora

1. Abra o arquivo `index.html` em seu navegador.
2. Clique nos botões numéricos e de operação para realizar cálculos.
3. Use o botão "C" para limpar a tela e o botão "DEL" para apagar o último número digitado.
4. Use o seletor de tema para alternar entre o tema claro e escuro.

## Tecnologias Utilizadas

* **HTML:** Para a estrutura da interface.
* **CSS:** Para o estilo visual da calculadora.
* **JavaScript:** Para a lógica da calculadora e manipulação do DOM.
* **Jest:** Para os testes unitários.

## Melhorias Futuras

* Adicionar suporte a operações mais avançadas, como raiz quadrada, porcentagem e exponenciação.
* Melhorar a interface do usuário com um design mais moderno e responsivo.
* Implementar a capacidade de armazenar o histórico de cálculos.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.


## Autor

Gabriel Boscaratto

