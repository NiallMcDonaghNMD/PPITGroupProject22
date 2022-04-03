"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const login_entity_1 = require("../entities/login.entity");
class loginStatusValidationPipe {
    constructor() {
        this.allowedStatus = [login_entity_1.loginStatus.OPEN, login_entity_1.loginStatus.WIP, login_entity_1.loginStatus.COMPLETED];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status.`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.allowedStatus.indexOf(status);
        return index !== -1;
    }
}
exports.loginStatusValidationPipe = loginStatusValidationPipe;
