import { IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    foodID : number;

    @IsNumber()
    groceryID : number;
    
    @IsNumber()
    productName : string;

    @IsNumber()
    unitPrice : number;

    @IsNumber()
    unitQuantity : string;

    @IsNumber()
    status : string;
}
