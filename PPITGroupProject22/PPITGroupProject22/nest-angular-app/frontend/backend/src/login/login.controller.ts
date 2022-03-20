import { Body, Controller, Get, Post, Patch,Delete, ValidationPipe, Param, UseGuards } from '@nestjs/common';
import { createLoginDto } from 'src/DTO/createLogin.dto';
import { loginStatus } from 'src/entities/login.entity';
import { LoginService } from './login.service';
import { loginStatusValidationPipe } from '../pipes/loginStatusValidation.pipe';
import {AuthGuard} from "@nestjs/passport";
import { User } from 'src/auth/user.decorator';
import { userEntity } from 'src/entities/user.entity';

// http://localhost:3000/login
@Controller('login')
@UseGuards(AuthGuard('jwt'))
export class LoginController {

    constructor(private loginService: LoginService) {
    }
    //http GET verb
    @Get()
    getAllLogins(
        @User() 
        user: userEntity
    ) {
        
        return this.loginService.getAllLogins(user);
    }

    @Post()
    createNewLogin(@Body(ValidationPipe) data: createLoginDto, @User() user: userEntity) {

        const { email, password } = data;

        return this.loginService.createLogin(data, user);
    }

    @Patch(':id')
    updateLogin(
        @Body('status', loginStatusValidationPipe) status: loginStatus,
        @Param(':id') id: number,
        @User() user: userEntity) {
        return this.loginService.update(id, status, user);
    }

    @Delete(':id')
    deleteLogin(@Param('id') id: number, @User() user: userEntity) {
        return this.loginService.delete(id, user);
    }
}


