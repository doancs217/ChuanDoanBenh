export class LoginData {
  public username: string;
  public password: string;
  constructor(user: string, pass: string) {
    this.username = user;
    this.password = pass;
  }
}
