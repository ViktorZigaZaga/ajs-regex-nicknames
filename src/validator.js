export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validatorUserName() {
    return (/^[^\d_-]\d{0,3}([a-zA-Z_-]|[a-zA-Z_-]\d{0,3})*[^\d_-]$/).test(this.name);
  }
}
