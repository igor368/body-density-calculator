import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { StudentModule } from './student/student.module';



@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DbModule, StudentModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
