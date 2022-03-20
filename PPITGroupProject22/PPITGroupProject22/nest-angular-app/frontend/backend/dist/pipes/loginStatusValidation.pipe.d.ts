import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { loginStatus } from "../entities/login.entity";
export declare class loginStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: loginStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
