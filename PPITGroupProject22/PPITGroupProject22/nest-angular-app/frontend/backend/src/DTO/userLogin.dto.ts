import {IsNotEmpty} from "class-validator"

export class userLoginDto{
    @IsNotEmpty()
    username: string;

    password: string;
}