import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserEntity } from './user';
// import { UserModel } from './usermodule';
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig)],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
