import express from 'express'
import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

export const bootstrap = async (port = 3000) => {
  const app = await NestFactory.create(AppModule)
  app.use(express.static(join(__dirname, '..', 'front')))
  await app.listen(port)
}
