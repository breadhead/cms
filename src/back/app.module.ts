import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

import FrontendController from './FrontendController';
import { JwtModule } from '@nestjs/jwt';
import { JwtOptionsFactory } from './infrastructure/JwtOptionsFactory';
import { PasswordEncoder } from './infrastructure/PasswordEncoder/PasswordEncoder';
import { BcryptPasswordEncoder } from './infrastructure/PasswordEncoder/BcryptPasswordEncoder';
import { AuthController } from './presentation/controller/AuthController';
import { Authenticator } from './application/Authenticator';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useClass: JwtOptionsFactory
    })
  ],
  controllers: [FrontendController, AuthController],
  providers: [
    {
      provide: PasswordEncoder,
      useClass: BcryptPasswordEncoder
    },
    Authenticator,
    JwtGuard
  ],
  exports: [JwtGuard, Authenticator]
})
export class AppModule implements NestModule {
  public configure() {
    // pass
  }
}
