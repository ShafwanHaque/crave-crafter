import { IsEmail, IsNumber, IsString, isEmail } from "class-validator";

export class CreateVendorDto {
    @IsString()
    companyName : string;

    @IsNumber()
    contactNumber : number;

    @IsEmail()
    email : string;

    @IsString()
    address : string;

    @IsString()
    status : string;  
}
