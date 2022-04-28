import { Repository } from 'typeorm';
import { createShopDto } from 'src/DTO/createShop.dto';
import { shopEntity } from 'src/entities/shop.entity';
export declare class ShopService {
    private repo;
    constructor(repo: Repository<shopEntity>);
    getAllShops(shop: shopEntity): Promise<shopEntity[]>;
    createShop(createShopDto: createShopDto, shop: shopEntity): Promise<void>;
    update(shopId: number, itemList: shopEntity): Promise<shopEntity>;
    delete(shopId: number, user: shopEntity): Promise<{
        success: boolean;
    }>;
}
