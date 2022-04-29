import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
import { createShopDto } from "src/DTO/createShop.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(regDTO: RegisterUserDto): unknown;
    signIn(loginDTO: userLoginDto): unknown;
    register(createShopDto: createShopDto): unknown;
}
