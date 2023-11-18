import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Admin} from './admin.entity'
import {Topic} from './topic.entity'
@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text:string;

    @ManyToOne((type) => Comment, (comment) => comment.admin)
    admin:Admin;

    @ManyToOne((type) => Topic, (topic) => topic.comments)
    topic:Topic;
}