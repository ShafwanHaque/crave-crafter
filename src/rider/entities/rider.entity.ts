import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    address : string;

    @Column()
    phoneNumber : number;

    @Column()
    email: string;

    @Column()
    status: string;

}
