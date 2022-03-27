import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { loginEntity } from "./login.entity";

@Entity()
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(() => userEntity, (login) => login.username) //proberbly wrong, login.id
    todos: userEntity[]

    // async verifyPassword(password: string) {
    //      const hash = await bcrypt.hash(password, this.salt);
    //      return hash == this.password;
    //     //return await bcrypt.compare(password, this.password);

    //}
}