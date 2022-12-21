import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user";
import { UserService } from "./user.service";
import { UserController } from "./usercontroller";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
   controllers: [UserController],
   providers: [UserService],
   
})

export class UserModel{}
