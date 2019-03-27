import { Module, NestModule } from '@nestjs/common'
import FrontendController from './FrontendController'

@Module({ controllers: [FrontendController] })
export class AppModule implements NestModule {
  public configure() {
    // pass
  }
}
