/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
console.log("inja entity");
@Entity({name:'book'})
export class BooksEntity
{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;
  
    @Column()
    writer: string;
  
    @Column()
    number: number;
  
    @Column()
    published: Date;
}