"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shop_entity_1 = require("../entities/shop.entity");
let ShopService = class ShopService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAllShops(shop) {
        const query = await this.repo.createQueryBuilder('shop_entity');
        query.where('shopId > 0');
        try {
            return await query.getMany();
        }
        catch (err) {
            throw new common_1.NotFoundException('no shop found');
        }
    }
    async createShop(createShopDto, shop) {
        const shopList = new shop_entity_1.shopEntity();
        const { shopName, itemList } = createShopDto;
        shopList.shopName = shopName;
        shopList.itemList = itemList;
        this.repo.create(shopList);
        await this.repo.save(shopList);
        shopList.shopId = shop.shopId;
    }
    async update(shopId, itemList) {
        try {
            await this.repo.update({ shopId, itemList: itemList.itemList }, {});
            return this.repo.findOne({ shopId });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Something went wrong');
        }
    }
    async delete(shopId, user) {
        const result = await this.repo.delete({ shopId: user.shopId });
        if (result.affected == 0) {
            throw new common_1.NotFoundException('not deleted');
        }
        else {
            return { success: true };
        }
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shop_entity_1.shopEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ShopService);
exports.ShopService = ShopService;
