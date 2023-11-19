import { IsEmail, IsString } from "class-validator";

export class CreateRiderDto {
    @IsString()
    firstName : string;

    @IsString()
    lastName : string;

    @IsString()
    address : string;

    @IsString()
    phoneNumber : number;

    @IsEmail()
    email: string;

    @IsString()
    status: string;
}
