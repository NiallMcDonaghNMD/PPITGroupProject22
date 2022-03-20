import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { loginEntity } from 'src/entities/login.entity';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([loginEntity]),
    AuthModule
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
