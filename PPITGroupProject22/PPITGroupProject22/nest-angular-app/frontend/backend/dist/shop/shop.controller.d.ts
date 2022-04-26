import { shopEntity } from 'src/entities/shop.entity';
import { createShopDto } from 'src/DTO/createShop.dto';
import { ShopService } from './shop.service';
export declare class shopController {
    private shopService;
    constructor(shopService: ShopService);
    getAllShops(shop: shopEntity): Promise<shopEntity[]>;
    createNewShop(data: createShopDto, shop: shopEntity): Promise<void>;
}
