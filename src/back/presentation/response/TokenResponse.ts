import { ApiModelProperty } from '@nestjs/swagger'
import { TokenModel } from '../../../shared/models/user/TokenModel'

export class TokenResponse implements TokenModel {
  @ApiModelProperty({ example: 'token-string-with-signature' })
  public readonly token: string
  constructor(token: string) {
    this.token = token
  }
}
