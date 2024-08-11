/* eslint-disable prettier/prettier */
import { DataSourceOptions } from "typeorm";
console.log("inja config");
const config:DataSourceOptions =
{
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'oldooz',
    password:'123',
    database:'books',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
}
export default config;