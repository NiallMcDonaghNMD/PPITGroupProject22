import { Column, Entity,  ManyToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shopEntity {
    @PrimaryGeneratedColumn()
    shopId: number;
    @Column({ default: null })
    shopName: string;

    @Column({ default: null})
    itemList: string;
   
    // @ManyToOne(() => shopEntity, (shop) => shop)
    // shop: shopEntity[];

    //  @OneToMany(() => userEntity, (login) => login.username) //proberbly wrong, login.id
    // todos: userEntity[]
}//end entity
