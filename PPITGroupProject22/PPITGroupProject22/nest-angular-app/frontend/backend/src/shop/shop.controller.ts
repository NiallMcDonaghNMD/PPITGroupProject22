// import { Body, Controller, Get, Post, Patch,Delete, ValidationPipe, Param, UseGuards } from '@nestjs/common';
// import { loginStatusValidationPipe } from '../pipes/loginStatusValidation.pipe';
// import { Shop } from 'src/auth/shop.decorator';
// import { shopEntity } from 'src/entities/shop.entity';

// // http://localhost:3000/shop
// @Controller('shop')
// export class LoginController {

//     constructor(private loginService: shopService) {
//     }
//     //http GET verb
//     @Get()
//     getAllShops(
//         @Shop() 
//         shop: shopEntity
//     ) {
        
//         return this.loginService.getAllShops(shop);
//     }

//     @Post()
//     createNewShop(@Body(ValidationPipe) data: createShopDto, @Shop() shop: shopEntity) {

//         const { email, password } = data;

//         return this.loginService.createLogin(data, shop);
//     }

//     @Patch(':id')
//     updateShop(
//         @Body('status', loginStatusValidationPipe) status: loginStatus,
//         @Param(':id') id: number,
//         @shop() shop: shopEntity) {
//         return this.loginService.update(id, status, shop);
//     }

//     @Delete(':id')
//     deleteShop(@Param('id') id: number, @shop() shop: shopEntity) {
//         return this.loginService.delete(id, shop);
//     }
// }


