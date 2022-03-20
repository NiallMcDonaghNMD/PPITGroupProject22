import {IsNotEmpty,MaxLength } from 'class-validator';

export class createLoginDto {
    @IsNotEmpty()
    @MaxLength(15)
    email: string;
    
    @IsNotEmpty()
    password: string;
}