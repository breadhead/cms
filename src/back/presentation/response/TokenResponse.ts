import { TokenModel } from 'src/shared/models/user/TokenModel';

export class TokenResponse implements TokenModel {
  public readonly token: string;
}
