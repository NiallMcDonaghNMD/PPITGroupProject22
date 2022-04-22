import { Body, Controller, Get, Post, Patch,Delete, ValidationPipe, Param } from '@nestjs/common';
//import { loginStatusValidationPipe } from '../pipes/loginStatusValidation.pipe';
import { Shop } from 'src/auth/shop.decorator';
import { shopEntity } from 'src/entities/shop.entity';
import { createShopDto } from 'src/DTO/createShop.dto';
import { ShopService } from './shop.service';

// http://localhost:3000/shop
@Controller('shop')
export class shopController {

    constructor(private shopService: ShopService) {
    }
    //http GET verb
    @Get()
    getAllShops(
        @Shop() 
        shop: shopEntity
    ) {
        
        return this.shopService.getAllShops(shop);
    }

    @Post()
    createNewShop(@Body(ValidationPipe) data: createShopDto, @Shop() shop: shopEntity) {

        const { shopName, itemList } = data;
        
        return this.shopService.createShop(data, shop);
    }

    @Patch(':id')
    updateShop(
        @Param(':id') id: number,
        @Shop() shop: shopEntity) {
        //return this.shopService.update(id, shop);
    }

    @Delete(':id')
    deleteShop(@Param('id') id: number, @Shop() shop: shopEntity) {
        return this.shopService.delete(id, shop);
    }
}


