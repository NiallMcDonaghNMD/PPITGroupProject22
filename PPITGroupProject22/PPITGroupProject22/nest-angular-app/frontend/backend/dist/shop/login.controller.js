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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const createLogin_dto_1 = require("../DTO/createLogin.dto");
const login_entity_1 = require("../entities/login.entity");
const login_service_1 = require("./login.service");
const loginStatusValidation_pipe_1 = require("../pipes/loginStatusValidation.pipe");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../auth/user.decorator");
const user_entity_1 = require("../entities/user.entity");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    getAllLogins(user) {
        return this.loginService.getAllLogins(user);
    }
    createNewLogin(data, user) {
        const { email, password } = data;
        return this.loginService.createLogin(data, user);
    }
    updateLogin(status, id, user) {
        return this.loginService.update(id, status, user);
    }
    deleteLogin(id, user) {
        return this.loginService.delete(id, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.userEntity]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getAllLogins", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLogin_dto_1.createLoginDto, user_entity_1.userEntity]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "createNewLogin", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)('status', loginStatusValidation_pipe_1.loginStatusValidationPipe)),
    __param(1, (0, common_1.Param)(':id')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, user_entity_1.userEntity]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "updateLogin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.userEntity]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "deleteLogin", null);
LoginController = __decorate([
    (0, common_1.Controller)('login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map