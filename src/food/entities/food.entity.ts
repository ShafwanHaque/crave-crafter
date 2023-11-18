import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    foodCategoryName : string;

    @Column()
    description : string;
}
