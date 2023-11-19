import { IsNumber } from "class-validator";

export class CreateOrderDetailDto {
    @IsNumber()
    productID : number;

    @IsNumber()
    orderID : number;

    @IsNumber()
    unitPrice : number;

    @IsNumber()
    quantity : number;

    @IsNumber()
    tootalPrice : number;
}
