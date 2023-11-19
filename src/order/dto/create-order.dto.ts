import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNumber()
    customerID : number;

    @IsNumber()
    riderID : number;

    @IsNumber()
    vendorID : number;

    @IsString()
    orderDateandTime : string;

    @IsString()
    deliveryDateandTime : string;

    @IsString()
    status : string;
}
