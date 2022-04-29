import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class loginStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: {};
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
