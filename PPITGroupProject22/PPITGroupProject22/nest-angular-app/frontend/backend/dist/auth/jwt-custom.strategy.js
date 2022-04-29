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
exports.jwtCustomStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const passport_jwt_1 = require("passport-jwt");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
let jwtCustomStrategy = class jwtCustomStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(repo) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'LOijtrkljdklsufidsui12jkj43k21l4'
        });
        this.repo = repo;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.repo.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
jwtCustomStrategy = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.userEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], jwtCustomStrategy);
exports.jwtCustomStrategy = jwtCustomStrategy;
