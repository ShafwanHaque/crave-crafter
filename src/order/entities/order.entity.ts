import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    customerID : number;

    @Column()
    riderID : number;

    @Column()
    vendorID : number;

    @Column()
    orderDateandTime : string;

    @Column()
    deliveryDateandTime : string;

    @Column()
    status : string;
}