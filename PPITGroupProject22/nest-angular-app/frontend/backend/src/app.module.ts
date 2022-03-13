import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact/contact.service';
import { ContactsController } from './contacts/contacts.controller';

//imports contact entity and includes it in importy array of root module
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'nestngdb',
      username: 'root',
      password: '', //Update this when DB is installed/working
<<<<<<< HEAD
=======
      database: 'nestngdb',
>>>>>>> parent of 882cd50c (Created basic backend functionality for MYSQL, got rid of error in typeorm index.ts, cleaned up unneeded files)
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]) 
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],
})
export class AppModule {}
