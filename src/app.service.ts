/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
console.log("inja app service");
@Injectable()
export class AppService
{
  getHello(): string
  {
    return " run ";
  }
}
