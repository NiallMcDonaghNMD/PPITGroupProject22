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
        const query = await this.repo.createQueryBuilder('shop');

        query.where('shopId = :shopId', { shopId: shop.shopId });
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
        shop.shopId = shop.id;
    }

    // async update(id: number, status: loginStatus, user: userEntity)
    // {
    //     try {
    //         await this.repo.update({id, userId: user.id}, {status});
    //         return this.repo.findOne({id});
    //       } catch (err) {
    //         throw new InternalServerErrorException('Something went wrong');
    //       }
    // }

    // async update(id: number, itemList: shopEntity) {
    //     try {
    //         await this.repo.update({shopName, itemList}, {});
    //         return this.repo.findOne({ id });
    //     } catch (err) {
    //         throw new InternalServerErrorException('Something went wrong');
    //     }
    // }

    async delete(id: number, user: shopEntity) {
        const result = await this.repo.delete({ id, shopId: user.id })

        if (result.affected == 0) {
            throw new NotFoundException('not deleted');
        }
        else {
            return { success: true };
        }
    }
}
