import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform: true}))

  const config = new DocumentBuilder().setTitle('Body density calculator')
  .setDescription('The Body density API description')
  .setVersion('1.0')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app, documentFactory)

  await app.listen(3000);
}
bootstrap();
