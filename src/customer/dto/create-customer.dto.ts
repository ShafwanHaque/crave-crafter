import { IsEmail, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    firstName : string;

    @IsString()
    lastName : string;

    @IsString()
    phoneNumber: number;

    @IsEmail()
    email : string;

    @IsString()
    address : string;

    @IsString()
    deliveryAddress : string;
    
    @IsString()
    cardDetails : string;
    
}
