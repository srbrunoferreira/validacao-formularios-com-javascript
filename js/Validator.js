class Validator {

  constructor(formButton) {
    this.dataVal = new DataValidator();
    this.notificator = new Notificator();

    this.formButton = formButton;
    this.invalidInputs = [];

    this.setButtonEvent();
  }

  setButtonEvent() {
    this.formButton.addEventListener('click', () => {
      this.getForm();
      this.validateForm();

      if (this.invalidInputs.length) {
        this.highlightInvalid();
        this.notificator.show(this.invalidInputs);
        this.invalidInputs = [];
      } else {
        // Send the data to the back-end (:
        alert('Ação concluída com sucesso!');
      }
    });
  }

  getForm() {
    this.formId = this.formButton.getAttribute('data-form');
    this.formData = new FormData(document.getElementById(this.formId));
  }

  validateForm() {
    for (let entries of this.formData.entries()) {
      let inputName = entries[0];
      let inputValue = entries[1];

      let isValidInput = this.dataVal[this.dataVal.getValidationFunc(inputName)](inputValue);

      if (!isValidInput) {
        this.invalidInputs.push(inputName);
      }
    }
  } 

  highlightInvalid() {
    this.invalidInputs.forEach(inputName => {
      let input = document.querySelector('#' + this.formId + " input[name='" + inputName + "']");
      console.log('#' + this.formId + " input[type='" + inputName + "']");
      input.parentElement.classList.add('highlight-input');
      input.parentElement.setAttribute('onfocusout', "this.classList.remove('highlight-input')");
    });
  }
}