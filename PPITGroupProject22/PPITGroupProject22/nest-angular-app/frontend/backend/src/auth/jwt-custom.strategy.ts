import { UnauthorizedException } from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {ExtractJwt,Strategy} from "passport-jwt";
import { userEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

export class jwtCustomStrategy extends PassportStrategy(Strategy){
    
    constructor(@InjectRepository(userEntity) private repo: Repository<userEntity>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'LOijtrkljdklsufidsui12jkj43k21l4'
        });
    }

    async validate(payload: {username: string})
    {
        const {username} = payload;
        const user = await this.repo.findOne({username});

        if (!user)
        {
            throw new UnauthorizedException();
        }
        return user;
    }
}