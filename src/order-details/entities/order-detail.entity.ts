import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    productID : number;

    @Column()
    orderID : number;

    @Column()
    unitPrice : number;

    @Column()
    quantity : number;

    @Column()
    tootalPrice : number;

}
