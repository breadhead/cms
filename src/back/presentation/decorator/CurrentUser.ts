import { createParamDecorator } from '@nestjs/common'
import { TokenPayload } from 'src/back/application/dto/TokenPayload'

export const CurrentUser = createParamDecorator(
  async (_, req): Promise<TokenPayload> => {
    const payload: TokenPayload = req.user

    if (!payload) {
      throw new Error('Try to get current user in anonymous endpoint!')
    }

    return payload
  },
)
