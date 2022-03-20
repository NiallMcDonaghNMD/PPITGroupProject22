import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(regDTO: RegisterUserDto): Promise<import("../entities/user.entity").userEntity>;
    signIn(loginDTO: userLoginDto): Promise<import("../entities/user.entity").userEntity>;
}
