import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shopEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    shopName: string;

    @Column({ array: true})
    itemList: string;
   
  //  @ManyToOne(() => userEntity, (user) => user.todos)
  //  user: userEntity

    @Column()
    shopId: number;

   
}//end entity
