import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MANGO_URI),
    StudentModule,
  ],
})
export class AppModule {}
