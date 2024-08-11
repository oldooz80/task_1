/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import ormconfig from './ormconfig';
console.log("inja app module");
@Module({
  imports: [ TypeOrmModule.forRoot({...ormconfig}),BooksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

