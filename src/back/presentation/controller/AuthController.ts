import { Body, Controller } from '@nestjs/common'
import { Authenticator } from 'src/back/application/Authenticator'
import { PostNoCreate } from 'src/back/utils/presentation/PostNoCreate'
import { AuthRequest } from '../request/AuthRequest'
import { TokenResponse } from '../response/TokenResponse'

@Controller('user/auth')
export class AuthController {
  public constructor(private readonly authenticator: Authenticator) {}

  @PostNoCreate('sign-in')
  public async signIn(@Body() request: AuthRequest): Promise<TokenResponse> {
    const { email, password } = request

    return this.createResponseByCredentials(email, password)
  }

  private async createResponseByCredentials(
    login: string,
    password: string,
  ): Promise<TokenResponse> {
    const token = await this.authenticator.signIn(login, password)

    return {
      token,
    }
  }
}
