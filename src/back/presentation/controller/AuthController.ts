import { Body, Controller } from '@nestjs/common'
import { Authenticator } from '../../application/Authenticator'
import { AuthRequest } from '../request/AuthRequest'
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUseTags,
} from '@nestjs/swagger'
import { TokenResponse } from '../response/TokenResponse'
import { PostNoCreate } from '../exception/PostNoCreate'

@Controller('user/auth')
@ApiUseTags('user')
export class AuthController {
  public constructor(private readonly authenticator: Authenticator) {}

  @PostNoCreate('sign-in')
  @ApiOperation({ title: 'Sign-in by email and password' })
  @ApiOkResponse({ description: 'Valid credentials', type: TokenResponse })
  @ApiBadRequestResponse({ description: 'Invalid credentials' })
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
