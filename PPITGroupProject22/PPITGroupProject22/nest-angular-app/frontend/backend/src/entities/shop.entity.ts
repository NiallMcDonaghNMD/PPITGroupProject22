import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shopEntity {
    @PrimaryGeneratedColumn()
    shopId: number;
    @Column({ default: null })
    shopName: string;

    @Column({ default: null})
    itemList: string;
   
    // @ManyToOne(() => itemList, (shop) => shop)
    // shop: itemList;

}//end entity
