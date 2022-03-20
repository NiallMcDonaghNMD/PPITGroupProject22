import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import {userEntity} from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'justfordrinks_db',
      host: 'localhost',
      username: 'root',
      password: '', //Update this when DB is installed/working
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([userEntity]),
    LoginModule 
  ],
  controllers: [AppController], //ContactsController
  providers: [AppService], //ContactService
})
export class AppModule {}
