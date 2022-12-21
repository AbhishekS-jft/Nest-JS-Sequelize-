import { UserEntity } from "./user";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config:MysqlConnectionOptions={
     type:'mysql',
      host:'localhost',
      port:3306,
      username:'abhi',
      password:'123@Abhishek',
      database:'test',
      entities:[UserEntity],
      synchronize:true,
}

export default config;