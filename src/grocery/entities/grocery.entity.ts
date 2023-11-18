import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grocery {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    groceryCategoryName : string;

    @Column()
    description : string;    
}
