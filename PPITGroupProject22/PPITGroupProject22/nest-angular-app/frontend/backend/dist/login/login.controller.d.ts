import { createLoginDto } from 'src/DTO/createLogin.dto';
import { loginStatus } from 'src/entities/login.entity';
import { LoginService } from './login.service';
import { userEntity } from 'src/entities/user.entity';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    getAllLogins(user: userEntity): unknown;
    createNewLogin(data: createLoginDto, user: userEntity): any;
    updateLogin(status: loginStatus, id: number, user: userEntity): unknown;
    deleteLogin(id: number, user: userEntity): unknown;
}
