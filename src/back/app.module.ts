import { Module, NestModule } from '@nestjs/common'
import { ConfigModule } from './config/config.module'

import FrontendController from './FrontendController'

@Module({
  controllers: [FrontendController],
  imports: [ConfigModule],
})
export class AppModule implements NestModule {
  public configure() {
    // pass
  }
}
