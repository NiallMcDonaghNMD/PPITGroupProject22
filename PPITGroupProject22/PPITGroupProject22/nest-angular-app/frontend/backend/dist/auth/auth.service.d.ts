import { userEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private repo;
    private jwt;
    constructor(repo: Repository<userEntity>, jwt: JwtService);
    registerUser(registerDTO: RegisterUserDto): Promise<userEntity>;
    loginuser(userLoginDto: userLoginDto): Promise<{
        token: string;
    }>;
    async: any;
}
