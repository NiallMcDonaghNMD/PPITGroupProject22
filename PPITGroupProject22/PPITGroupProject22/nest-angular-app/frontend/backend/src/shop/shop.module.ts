import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { shopEntity } from 'src/entities/shop.entity';
import { shopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([shopEntity]),
    AuthModule
  ],
  controllers: [shopController],
  providers: [ShopService]
})
export class shopModule {}
