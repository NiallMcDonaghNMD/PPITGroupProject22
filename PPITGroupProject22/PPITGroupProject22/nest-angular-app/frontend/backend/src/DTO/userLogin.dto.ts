import {IsNotEmpty} from "class-validator"

export class userLoginDto{
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}