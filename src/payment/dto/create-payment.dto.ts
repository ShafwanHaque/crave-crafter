import { IsNumber, IsString } from "class-validator";

export class CreatePaymentDto {
    @IsNumber()
    orderID : number;

    @IsNumber()
    paymentType : number;

    @IsString()
    paymentDateandTime : string;

    @IsString()
    status : string;
}
