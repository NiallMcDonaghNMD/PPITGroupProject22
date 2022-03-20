import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "../DTO/registerUser.dto";
import * as bcrypt from 'bcryptjs';
import { userLoginDto } from "src/DTO/userLogin.dto";
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
    constructor(@InjectRepository(userEntity) private repo: Repository<userEntity>, private jwt: JwtService) {

    }

    async registerUser(registerDTO: RegisterUserDto) {
        const { username, password } = registerDTO;
        const hashed = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashed);

        const user = new userEntity();
        user.username = username;
        user.password = hashed;
        user.salt = salt;

        this.repo.create(user);

        try {
            return await this.repo.save(user);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong, user was not created.');
        }


    }//end authservice

    async loginuser(userLoginDto: userLoginDto) {
        const { username, password } = userLoginDto;

        const user = await this.repo.findOne({ username });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const salt = user.salt;
           const isPasswordMatch = await bcrypt.compare(password, user.password);
       // const isPasswordMatch = user.verifyPassword(password);

        if (isPasswordMatch) {
            const jwtPayload = { username };
            const jwtToken = await this.jwt.signAsync(jwtPayload, { expiresIn: '1d', algorithm: 'HS512' });
            return { token: jwtToken };
        }
        else {
            throw new UnauthorizedException('Invalid credentials');

        }
    }

    async
}