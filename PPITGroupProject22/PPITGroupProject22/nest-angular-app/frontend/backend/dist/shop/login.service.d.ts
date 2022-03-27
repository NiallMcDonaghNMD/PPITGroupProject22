import { createLoginDto } from 'src/DTO/createLogin.dto';
import { loginEntity, loginStatus } from 'src/entities/login.entity';
import { userEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class LoginService {
    private repo;
    constructor(repo: Repository<loginEntity>);
    getAllLogins(user: userEntity): Promise<loginEntity[]>;
    createLogin(createLoginDto: createLoginDto, user: userEntity): Promise<void>;
    update(id: number, status: loginStatus, user: userEntity): Promise<loginEntity>;
    delete(id: number, user: userEntity): Promise<{
        success: boolean;
    }>;
}
