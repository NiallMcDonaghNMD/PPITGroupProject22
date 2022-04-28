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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopController = void 0;
const common_1 = require("@nestjs/common");
const shop_decorator_1 = require("../auth/shop.decorator");
const shop_entity_1 = require("../entities/shop.entity");
const createShop_dto_1 = require("../DTO/createShop.dto");
const shop_service_1 = require("./shop.service");
let shopController = class shopController {
    constructor(shopService) {
        this.shopService = shopService;
    }
    getAllShops(shop) {
        console.log(shop);
        return this.shopService.getAllShops(shop);
    }
    createNewShop(data, shop) {
        const { shopName, itemList } = data;
        return this.shopService.createShop(data, shop);
    }
    updateShop(shopId, shop) {
        return this.shopService.update(shopId, shop);
    }
    deleteShop(shopId, shop) {
        return this.shopService.delete(shopId, shop);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, shop_decorator_1.Shop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shop_entity_1.shopEntity]),
    __metadata("design:returntype", void 0)
], shopController.prototype, "getAllShops", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, shop_decorator_1.Shop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createShop_dto_1.createShopDto, shop_entity_1.shopEntity]),
    __metadata("design:returntype", void 0)
], shopController.prototype, "createNewShop", null);
__decorate([
    (0, common_1.Patch)(':shopId'),
    __param(0, (0, common_1.Param)(':shopId')),
    __param(1, (0, shop_decorator_1.Shop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, shop_entity_1.shopEntity]),
    __metadata("design:returntype", void 0)
], shopController.prototype, "updateShop", null);
__decorate([
    (0, common_1.Delete)(':shopId'),
    __param(0, (0, common_1.Param)('shopId')),
    __param(1, (0, shop_decorator_1.Shop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, shop_entity_1.shopEntity]),
    __metadata("design:returntype", void 0)
], shopController.prototype, "deleteShop", null);
shopController = __decorate([
    (0, common_1.Controller)('shop'),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], shopController);
exports.shopController = shopController;
