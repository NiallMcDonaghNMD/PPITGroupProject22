import { userEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
import { JwtService } from "@nestjs/jwt";
import { createShopDto } from "src/DTO/createShop.dto";
import { shopEntity } from "src/entities/shop.entity";
export declare class AuthService {
    private repo;
    private shopRepo;
    private jwt;
    constructor(repo: Repository<userEntity>, shopRepo: Repository<shopEntity>, jwt: JwtService);
    registerUser(registerDTO: RegisterUserDto): unknown;
    loginuser(userLoginDto: userLoginDto): unknown;
    registerShop(registerDTO: createShopDto): unknown;
}
