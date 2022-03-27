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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const login_entity_1 = require("../entities/login.entity");
const typeorm_2 = require("typeorm");
let LoginService = class LoginService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAllLogins(user) {
        const query = await this.repo.createQueryBuilder('login');
        query.where('todo.userId = :userId', { userId: user.id });
        try {
            return await query.getMany();
        }
        catch (err) {
            throw new common_1.NotFoundException('no login found');
        }
    }
    async createLogin(createLoginDto, user) {
        const login = new login_entity_1.loginEntity();
        const { email, password } = createLoginDto;
        login.email = email;
        login.password = password;
        login.status = login_entity_1.loginStatus.OPEN;
        this.repo.create(login);
        await this.repo.save(login);
        login.userId = user.id;
    }
    async update(id, status, user) {
        try {
            await this.repo.update({ id, userId: user.id }, { status });
            return this.repo.findOne({ id });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Something went wrong');
        }
    }
    async delete(id, user) {
        const result = await this.repo.delete({ id, userId: user.id });
        if (result.affected == 0) {
            throw new common_1.NotFoundException('not deleted');
        }
        else {
            return { success: true };
        }
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(login_entity_1.loginEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map