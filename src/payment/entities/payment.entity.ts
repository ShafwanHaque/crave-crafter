import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    orderID : number;

    @Column()
    paymentType : number;

    @Column()
    paymentDateandTime : string;

    @Column()
    status : string;
}
