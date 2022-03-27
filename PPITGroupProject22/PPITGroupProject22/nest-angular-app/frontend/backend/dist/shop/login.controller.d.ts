import { createLoginDto } from 'src/DTO/createLogin.dto';
import { loginStatus } from 'src/entities/login.entity';
import { LoginService } from './login.service';
import { userEntity } from 'src/entities/user.entity';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    getAllLogins(user: userEntity): Promise<import("src/entities/login.entity").loginEntity[]>;
    createNewLogin(data: createLoginDto, user: userEntity): Promise<void>;
    updateLogin(status: loginStatus, id: number, user: userEntity): Promise<import("src/entities/login.entity").loginEntity>;
    deleteLogin(id: number, user: userEntity): Promise<{
        success: boolean;
    }>;
}
