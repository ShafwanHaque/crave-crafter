import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    foodID : number;

    @Column()
    groceryID : number;
    
    @Column()
    productName : string;

    @Column()
    unitPrice : number;

    @Column()
    unitQuantity : string;

    @Column()
    status : string;
    
}
