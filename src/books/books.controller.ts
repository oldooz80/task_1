/* eslint-disable prettier/prettier */
import { Controller, Get, Query,Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksEntity } from './books.entity';

console.log("inja book controller");

@Controller('books')
export class BooksController
{
  constructor(private readonly booksService: BooksService) {}

  @Post('seeding')
  async seedingDatabse()
  {
    return this.booksService.seedingDatabase(); 
  }

  @Get()
  findByName(@Query('name') name: string): Promise<BooksEntity[]>
  {
    console.log("inja book controller 2");
    return this.booksService.findByName(name);
  }
}
