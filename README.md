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

## Como funciona

O método construtor da classe Validator recebe como parâmetro um botão que possui um atributo data-form contendo o id do formulário.
O id é necessário para a classe Validator pegar os dados do formulário com a interface FormData.

Assim, a classe Validator tem um método que corre por todos os inputs e valida cada um com o auxilio da classe DataValidator.

Caso houver algum input inválido, o atributo _name_ desse input é armazenado numa variável da classe Validator. Essa variável é
posteriormente enviada a um método da classe Notificator, que se encarrega de exibir a mensagem de erro respectiva para aquele input.

## Sobre a interface

A interface desenvolvida aprenseta dois formulários: um de login e outro de registro. O primeiro formulário apresenta dados incorretos, que serão
negados pelo JavaScript e será exibida uma notificação com os campos incorretos, que terão a cor de suas bordas mudados para vermelho. O segundo apresenta dados corretos e será exibido um alert dizendo que a operação foi realizada com sucesso.

Você também pode mudar os valores para testar mais o aplicativo (:
