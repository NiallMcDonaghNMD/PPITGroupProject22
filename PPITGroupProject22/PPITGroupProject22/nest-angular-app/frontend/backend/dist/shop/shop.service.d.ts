import { Repository } from 'typeorm';
import { createShopDto } from 'src/DTO/createShop.dto';
import { shopEntity } from 'src/entities/shop.entity';
export declare class ShopService {
    private repo;
    constructor(repo: Repository<shopEntity>);
    getAllShops(shop: shopEntity): unknown;
    createShop(createShopDto: createShopDto, shop: shopEntity): any;
    update(shopId: number, itemList: shopEntity): unknown;
    delete(shopId: number, user: shopEntity): unknown;
}
