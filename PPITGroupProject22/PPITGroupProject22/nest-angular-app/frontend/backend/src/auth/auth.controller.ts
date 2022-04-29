import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { userLoginDto } from "src/DTO/userLogin.dto";
import { createShopDto } from "src/DTO/createShop.dto";

//http://localhost:3000/auth
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('staffregister')
  registration(@Body(ValidationPipe) regDTO: RegisterUserDto) {
    return this.authService.registerUser(regDTO);
  }

  @Post('stafflogin')
  signIn(@Body(ValidationPipe) loginDTO: userLoginDto) {
    return this.authService.loginuser(loginDTO);
  }

  @Post('shopregister')
  register(@Body(ValidationPipe) createShopDto: createShopDto) {
    return this.authService.registerShop(createShopDto);
  }
}