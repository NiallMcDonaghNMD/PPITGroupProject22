import { shopEntity } from 'src/entities/shop.entity';
import { createShopDto } from 'src/DTO/createShop.dto';
import { ShopService } from './shop.service';
export declare class shopController {
    private shopService;
    constructor(shopService: ShopService);
    getAllShops(shop: shopEntity): unknown;
    createNewShop(data: createShopDto, shop: shopEntity): any;
    updateShop(shopId: number, shop: shopEntity): unknown;
    deleteShop(shopId: number, shop: shopEntity): unknown;
}
