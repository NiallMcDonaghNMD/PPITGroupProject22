import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { userEntity } from "../entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import { jwtCustomStrategy } from './jwt-custom.strategy';
import { shopEntity } from 'src/entities/shop.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([userEntity, shopEntity]),
    JwtModule.register({
      secret: 'LOijtrkljdklsufidsui12jkj43k21l4',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d'
      }
    }),
    PassportModule.register({
        defaultStrategy: 'jwt'
    })
  ],
  providers: [AuthService, jwtCustomStrategy],
  controllers: [AuthController],
  exports: [PassportModule, jwtCustomStrategy]
})
export class AuthModule {}
