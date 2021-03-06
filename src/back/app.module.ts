import { Module, NestModule } from '@nestjs/common'
import { ConfigModule } from './config/config.module'

import { FrontendController } from './presentation/controller/FrontendController'
import { JwtModule } from '@nestjs/jwt'
import { JwtOptionsFactory } from './infrastructure/JwtOptionsFactory'
import { PasswordEncoder } from './infrastructure/PasswordEncoder/PasswordEncoder'
import { BcryptPasswordEncoder } from './infrastructure/PasswordEncoder/BcryptPasswordEncoder'
import { AuthController } from './presentation/controller/AuthController'
import { Authenticator } from './application/Authenticator'
import { JwtGuard } from './presentation/security/JwtGuard'

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useClass: JwtOptionsFactory,
    }),
  ],
  controllers: [FrontendController, AuthController],
  providers: [
    {
      provide: PasswordEncoder,
      useClass: BcryptPasswordEncoder,
    },
    Authenticator,
    JwtGuard,
  ],
})
export class AppModule implements NestModule {
  public configure() {
    // pass
  }
}
