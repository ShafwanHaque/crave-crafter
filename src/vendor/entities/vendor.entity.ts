import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    companyName : string;

    @Column()
    contactNumber : number;

    @Column()
    email : string;

    @Column()
    address : string;

    @Column()
    status : string;    
}
