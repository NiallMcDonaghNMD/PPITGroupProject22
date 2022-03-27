import {IsNotEmpty,MaxLength } from 'class-validator';

export class createShopDto {
    @IsNotEmpty()
    @MaxLength(15)
    shopName: string;
   
    @IsNotEmpty()
    itemlist: string;
}