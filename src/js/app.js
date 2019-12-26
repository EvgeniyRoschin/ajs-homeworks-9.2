export default class Validator {
  validateUsername(username) {
    this.username = username;
    return this.username.search(/^([a-z]+(\d{0,3}[_-]+)*\d{0,3})*[a-z]+$/i) !== -1;
  }
}
