import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Esta línea permite que el frontend pueda conectarse sin error de CORS
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();