import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { User } from '../domain/User.entity'
import { PasswordEncoder } from '../infrastructure/PasswordEncoder/PasswordEncoder'
import { TokenPayload } from './dto/TokenPayload'
import { InvalidCredentialsException } from './exception/InvalidCredentialsException'
import { InvalidTokenException } from './exception/InvalidTokenException'
import { EntityNotFoundException } from '../utils/domain/EntityNotFoundException'

@Injectable()
export class Authenticator {
  public constructor(
    private readonly passwordEncoder: PasswordEncoder,
    private readonly jwt: JwtService,
  ) {}

  public async decode(token: string): Promise<TokenPayload> {
    try {
      this.jwt.verify(token)

      return this.jwt.decode(token) as TokenPayload
    } catch (e) {
      // token is invalid
      throw new InvalidTokenException(token)
    }
  }

  public async signIn(login: string, password: string): Promise<string> {
    const user = this.getUser(login)

    if (!user) {
      throw new EntityNotFoundException(User.name, {
        login,
      })
    }
    const passwordValid = await user.isPasswordValid(
      password,
      this.passwordEncoder,
    )

    if (!passwordValid) {
      throw new InvalidCredentialsException(login, password)
    }

    const payload = this.createTokenPayload(user)
    const token = this.jwt.sign(payload)

    return token
  }

  // TODO: replace it with repository or another way to get user
  private getUser(login: string) {
    const testUser = new User('admin')
    testUser.changePassword('admin', this.passwordEncoder)
    const user = [testUser].find(userItem => userItem.login === login)
    return user
  }

  private createTokenPayload(user: User): TokenPayload {
    return {
      login: user.login,
    }
  }
}
