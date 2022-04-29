import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createShopDto } from 'src/DTO/createShop.dto';
import { shopEntity } from 'src/entities/shop.entity';

@Injectable()
export class ShopService {

    constructor(@InjectRepository(shopEntity) private repo: Repository<shopEntity>) {

    }

    async getAllShops(shop: shopEntity) {
        const query = await this.repo.createQueryBuilder('shop_entity');

        query.where('shopId > 0'); //*** Manually inputting numbers works but not automatic..fix later
        //return await this.repo.find();
        
        try {
            return await query.getMany();
        }
        catch (err) {
            throw new NotFoundException('no shop found');
        }
    }

    async createShop(createShopDto: createShopDto, shop: shopEntity) {
        const shopList = new shopEntity();
        const { shopName, itemList } = createShopDto;
        shopList.shopName = shopName;
        shopList.itemList = itemList;

        this.repo.create(shopList);
        await this.repo.save(shopList);
        shopList.shopId = shop.shopId;
        
    }

    async update(shopId: number, itemList: shopEntity) {
        try {
            await this.repo.update({shopId, itemList: itemList.itemList}, {});
            return this.repo.findOne({ shopId });
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong');
        }
    }

    async delete(shopId: number, user: shopEntity) {
        const result = await this.repo.delete({ shopId: user.shopId })

        if (result.affected == 0) {
            throw new NotFoundException('not deleted');
        }
        else {
            return { success: true };
        }
    }
}
