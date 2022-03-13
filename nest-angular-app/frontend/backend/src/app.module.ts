import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
//import { ContactService } from './contact/contact.service';
//import { ContactsController } from './contacts/contacts.controller';

//imports contact entity and includes it in importy array of root module
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'justfordrinks_db',
      username: 'root',
      password: 'root', //Update this when DB is installed/working
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]) 
  ],
  controllers: [AppController], //ContactsController
  providers: [AppService], //ContactService
})
export class AppModule {}
