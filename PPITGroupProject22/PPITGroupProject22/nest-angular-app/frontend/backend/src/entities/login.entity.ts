import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userEntity } from "./user.entity";

@Entity()
export class loginEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: null })
    email: string;

    @Column({ default: null })
    password: string;
    @Column()
    status: loginStatus;

    @ManyToOne(() => userEntity, (user) => user.todos)
    user: userEntity

    @Column()
    userId: number;
}



export enum loginStatus {
    OPEN = 'OPEN',
    WIP = 'WIP',
    COMPLETED = 'COMPLETED'
}