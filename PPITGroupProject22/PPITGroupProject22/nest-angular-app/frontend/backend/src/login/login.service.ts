import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createLoginDto } from 'src/DTO/createLogin.dto';
import { loginEntity, loginStatus } from 'src/entities/login.entity';
import { userEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

    constructor(@InjectRepository(loginEntity) private repo: Repository<loginEntity>)
    {

    }
    
    async getAllLogins(user: userEntity)
    {
        const query = await this.repo.createQueryBuilder('login');

        query.where('todo.userId = :userId', {userId: user.id});
        //return await this.repo.find();

        try{
            return await query.getMany();
        }
        catch(err) {
            throw new NotFoundException('no login found');
        }
    }

    async createLogin(createLoginDto: createLoginDto, user: userEntity)
    {
        const login = new loginEntity();
        const {email, password} = createLoginDto;
        login.email = email;
        login.password = password;
        login.status = loginStatus.OPEN;

        this.repo.create(login);
       await this.repo.save(login);
       login.userId = user.id;
    }

    async update(id: number, status: loginStatus, user: userEntity)
    {
        try {
            await this.repo.update({id, userId: user.id}, {status});
            return this.repo.findOne({id});
          } catch (err) {
            throw new InternalServerErrorException('Something went wrong');
          }
    }

   async delete(id: number, user: userEntity) {
       const result = await this.repo.delete({id, userId: user.id})
       
       if(result.affected == 0)
       {
           throw new NotFoundException('not deleted');
       }
       else{
           return {success: true};
       }
    }
}
