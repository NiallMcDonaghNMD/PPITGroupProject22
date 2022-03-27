// import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class shopService {

//     constructor(@InjectRepository(shopEntity) private repo: Repository<shopEntity>) {

//     }

//     async getAllLogins(shop: shopEntity) {
//         const query = await this.repo.createQueryBuilder('shop');

//         query.where('todo.shopId = :shopId', { shopId: shop.id });
//         //return await this.repo.find();

//         try {
//             return await query.getMany();
//         }
//         catch (err) {
//             throw new NotFoundException('no shop found');
//         }
//     }

//     async createShop(createShopDto: createShopDto, shop: shopEntity) {
//         const shopList = new shopEntity();
//         const { shopName, itemList } = createShopDto;
//         shopList.shopName = shopName;
//         shopList.itemList = itemList;

//         this.repo.create(shop);
//         await this.repo.save(shop);
//         shop.shopId = shop.id;
//     }

//     // async update(id: number, itemList: shopEntity) {
//     //     try {
//     //         await this.repo.update({ id, shopId: shop.itemList });
//     //         return this.repo.findOne({ id });
//     //     } catch (err) {
//     //         throw new InternalServerErrorException('Something went wrong');
//     //     }
//     // }

//     // async delete(id: number, user: shopEntity) {
//     //     const result = await this.repo.delete({ id, shopId: user.id })

//     //     if (result.affected == 0) {
//     //         throw new NotFoundException('not deleted');
//     //     }
//     //     else {
//     //         return { success: true };
//     //     }
//     // }
// }
