import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'

import { AppModule } from './app.module'

/**
 * Standard entry point for the Nest application.
 *
 * @remarks
 * This has been automatically generated by Nest.js
 *
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, '..', 'docs'))
  await app.listen(3000)
}
bootstrap()
