import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminDto } from "./createAdminDto";
import { IsEmail, IsString } from "class-validator";

export class UpdateAdminDto extends PartialType(CreateAdminDto){
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}