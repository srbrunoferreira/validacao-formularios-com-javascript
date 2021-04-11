# Validação e formulários utlizando JavaScript

## Para enviar os formulários, os dados digitados pelos usuários devem seguir as seguintes regras:

1. Senha: precisa ter ao menos um número, uma letra maiúscula, uma letra minúscula e de 6 a 20 caracteres.

2. Email: não pode iniciar com números, e não pode conter nenhum outro caractere exceto: @, ., A-z, e 0-9.
2.1 Exemplos corretos: user@gmail.com, user32@email.com

7. Data de nascimento: é validade seguindo a seguinte estrutura: Y-M-D.

8. nome: deve conter apenas um espaço entre as palavras e apenas letras, sendo permitidos caracteres acentuados.

## Organização dos arquivos .js

1. Validator.js - responsável por detectar o clicque no botão e validar o formulário do qual o referido botão pertence.
2. DataValidator.js - responsável por validar os dados em si, pois possui as funções necessárias para tal.
3. Notificator.js - responsável por exibir uma div contendo os inputs com dados inválidos.

