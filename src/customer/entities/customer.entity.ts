import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    phoneNumber: string;

    @Column()
    email : string;

    @Column()
    address : string;

    @Column()
    deliveryAddress : string;

    @Column()
    cardDetails : string;
}
