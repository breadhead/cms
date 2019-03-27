import { PasswordEncoder } from '../infrastructure/PasswordEncoder/PasswordEncoder';

export class User {
  public readonly login: string;

  private password: string = '';

  public constructor(login: string) {
    this.login = login;
  }

  public async changePassword(
    rawPassword: string,
    encoder: PasswordEncoder
  ): Promise<void> {
    this.password = await encoder.encodePassword(rawPassword);
  }

  public async isPasswordValid(
    rawPassword: string,
    encoder: PasswordEncoder
  ): Promise<boolean> {
    return encoder.isPasswordValid(this.password, rawPassword);
  }
}
