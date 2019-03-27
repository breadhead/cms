import { AuthModel } from 'src/shared/models/user/AuthModel';

export class AuthRequest implements AuthModel {
  public readonly email: string;

  public readonly password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
