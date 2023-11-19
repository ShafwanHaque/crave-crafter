import { IsString, isString } from "class-validator";

export class CreateFoodDto {
    @IsString()
    foodCategoryName : string;

    @IsString()
    description : string;

}
