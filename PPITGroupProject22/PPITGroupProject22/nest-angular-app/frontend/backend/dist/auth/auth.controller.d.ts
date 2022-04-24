import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
import { createShopDto } from "src/DTO/createShop.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(regDTO: RegisterUserDto): Promise<import("../entities/user.entity").userEntity>;
    signIn(loginDTO: userLoginDto): Promise<{
        token: string;
    }>;
    register(createShopDto: createShopDto): Promise<import("../entities/shop.entity").shopEntity & import("../entities/user.entity").userEntity>;
}
