import { IsEmail,  IsString, isString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"; 
export class CreateAdminDto{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}

export class UpdateAdminDto extends PartialType(CreateAdminDto){}


