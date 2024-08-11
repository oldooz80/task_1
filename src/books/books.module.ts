/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksEntity } from './books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
