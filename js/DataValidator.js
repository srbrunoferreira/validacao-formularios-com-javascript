class DataValidator {

  constructor() {}

  // Valida A-z e pontos.
  validateEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }

  validatePassword(password) {
    // Válida uma senha de 6 a 20 caracteres que contém no mínimo
    // um digito numérico, uma letra maiúscula e uma minúscula.
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,255}$/.test(password);
  }
  
  validateString(string) {
    return /^(?!.*\ {2})[a-z-A-Z0-9]+[a-zA-Z0-9"':\-\,À-ú\r\n ]+[a-z-A-Z0-9.]$/.test(string);
  }

  validateDate(date) {
    return /(\d{4})-(\d{2})-(\d{2})/.test(date);
  }

  getValidationFunc(dataName) {
    var func;
    switch (dataName) {
      case 'email':
        func = 'validateEmail';
        break;
      case 'password':
        func = 'validatePassword';
        break;
      case 'name':
        func = 'validateString';
        break;
      case 'date':
        func = 'validateDate';
        break;
    }
    return func;
  }
}