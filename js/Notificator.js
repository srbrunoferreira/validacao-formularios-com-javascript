class Notificator {
  constructor() {
    this.errorMessages = {
      name: 'O nome inserido é inválido.',
      email: 'O e-mail digitado é inválido.',
      date: 'A data digitada é inválida.',
      password: 'A senha inserida não corresponde aos requisitos.'
    };
  }

  show(invalidInputs) {
    this.getMessages(invalidInputs);

    let container = document.createElement('div');
    container.setAttribute('id', 'warning');
    container.setAttribute('onclick', 'this.remove();');

    let title = document.createElement('span');
    title.appendChild(document.createTextNode('Campos incorretos!'));

    let ulContainer = document.createElement('ul');

    this.messages.forEach(msg => {
      msg = document.createTextNode(msg);
      let li = document.createElement('li');
      li.appendChild(msg);

      ulContainer.appendChild(li);
    });

    container.appendChild(title);
    container.appendChild(ulContainer);

    document.body.appendChild(container);

    setTimeout(() => {
    document.querySelector('#warning').remove();
    }, 6000);
  }

  getMessages(invalidInputs) {
    this.messages = [];

    invalidInputs.forEach(invalidInput => {
      this.messages.push(this.errorMessages[invalidInput]);
    });

  }
}
