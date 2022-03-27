import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shopEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: null })
    shopName: string;

    @Column({ default: null , array: true})
    itemList: string;
   
  //  @ManyToOne(() => userEntity, (user) => user.todos)
  //  user: userEntity

    @Column()
    shopId: number;
}//end entity
