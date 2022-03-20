import { Strategy } from "passport-jwt";
import { userEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
declare const jwtCustomStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtCustomStrategy extends jwtCustomStrategy_base {
    private repo;
    constructor(repo: Repository<userEntity>);
    validate(payload: {
        username: string;
    }): Promise<userEntity>;
}
export {};
