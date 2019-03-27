import { INestApplication } from '@nestjs/common'
import cors from 'cors'

export const setupCors = (app: INestApplication) => {
  app.use(cors())
}
