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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const shop_entity_1 = require("../entities/shop.entity");
let AuthService = class AuthService {
    constructor(repo, shopRepo, jwt) {
        this.repo = repo;
        this.shopRepo = shopRepo;
        this.jwt = jwt;
    }
    async registerUser(registerDTO) {
        const { username, password } = registerDTO;
        const hashed = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashed);
        const user = new user_entity_1.userEntity();
        user.username = username;
        user.password = hashed;
        user.salt = salt;
        this.repo.create(user);
        try {
            return await this.repo.save(user);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Something went wrong, user was not created.');
        }
    }
    async loginuser(userLoginDto) {
        const { username, password } = userLoginDto;
        const user = await this.repo.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const salt = user.salt;
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            const jwtPayload = { username };
            const jwtToken = await this.jwt.signAsync(jwtPayload, { expiresIn: '1d', algorithm: 'HS512' });
            return { token: jwtToken };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async registerShop(registerDTO) {
        const { shopName, itemList } = registerDTO;
        const shop = new shop_entity_1.shopEntity();
        shop.shopName = shopName;
        shop.itemList = itemList;
        this.shopRepo.create(shop);
        try {
            return await this.shopRepo.save(shop);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Something went wrong, shop was not created.');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.userEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(shop_entity_1.shopEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;
