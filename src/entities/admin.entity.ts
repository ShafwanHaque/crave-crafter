import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn  } from "typeorm";
import * as bcrypt from'bcrypt'
import { type } from "os";
import { Topic } from "./topic.entity";
import { Comment } from "./comment.entity";

@Entity()
export class Admin{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true, nullable: false})
    name: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false})
    password:string;

    @OneToMany((type) => Admin, (admin) =>admin.comment)
    comment: Comment[];
    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,10);
    }
}

asdasd