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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopEntity = void 0;
const typeorm_1 = require("typeorm");
let shopEntity = class shopEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], shopEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], shopEntity.prototype, "shopName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null, array: true }),
    __metadata("design:type", String)
], shopEntity.prototype, "itemList", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], shopEntity.prototype, "shopId", void 0);
shopEntity = __decorate([
    (0, typeorm_1.Entity)()
], shopEntity);
exports.shopEntity = shopEntity;
//# sourceMappingURL=shop.entity.js.map