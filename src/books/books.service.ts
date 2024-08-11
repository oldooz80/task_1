/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './books.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class BooksService
{
  constructor(@InjectRepository(BooksEntity)private booksRepository: Repository<BooksEntity>)
  {
    console.log("inja sazande book service");
  }

  create(book: BooksEntity): Promise<BooksEntity>
  {
    console.log("inja book service 3");
   return this.booksRepository.save(book);
  }

  findAll(): Promise<BooksEntity[]>
  {
    console.log("inja book service 1");
    return this.booksRepository.find();
  }

  findByName(name: string): Promise<BooksEntity[]>
  {
    console.log("inja book service 2");
    return this.booksRepository.find({ where: { name } });
  }

 faker_test():BooksEntity
{
  const book = new BooksEntity();

  book.name = faker.lorem.word();
  book.writer = faker.person.fullName(); 
  book.number = 9;
  book.published = faker.date.past();

  return book;
}

 async seedingDatabase()
 {
  const books: BooksEntity[] = faker.helpers.multiple(this.faker_test,{count:100});

  return this.booksRepository.save(books)
 }
}
