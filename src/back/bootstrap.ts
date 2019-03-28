import express from 'express'
import { join } from 'path'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { setupCors } from './addons/setupCors'
import { setupSwagger } from './addons/setupSwagger'

export const bootstrap = async (port = 3000) => {
  const app = await NestFactory.create(AppModule)

  app.use(express.static(join(__dirname, '..', 'front')))
  setupCors(app)
  setupSwagger(app, 'docs')
  await app.listen(port)
}
