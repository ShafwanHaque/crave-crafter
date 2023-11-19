import { IsString } from "class-validator";

export class CreateGroceryDto {
    @IsString()
    groceryCategoryName : string;

    @IsString()
    description : string;    
}
