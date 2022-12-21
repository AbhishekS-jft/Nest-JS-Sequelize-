import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { create } from "domain";
import { UserEntity } from "./user";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService:UserService){

    }


    @Get()
    async fillAll(@Res() res:Response){
        const response= await this.userService.findAll();
        return response;
    }

    @Get(":id")
    async findOne(@Param() id:number,@Res() res:Response){
        const response=await this.userService.findOne(id);
        return response;
    }

    @Post()
    async create(@Body() createUserDto:UserEntity,@Res() res:Response){
        const response=await this.userService.create(createUserDto);
        return response;
    }

    @Put(":id")
    async update(@Param() id:number,@Body() createUserDto:UserEntity,@Res() res:Response){
        const response=await this.userService.update(id,createUserDto);
        return response;
    }

    @Delete()
    async delete(@Body() id:number,@Res() res:Response){
        const response=await this.userService.remove(id);
        return response;
    }
}    