import { ArgumentMetadata, BadRequestException, Delete, Param, PipeTransform } from "@nestjs/common";
import { loginStatus } from "../entities/login.entity";
export class loginStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [loginStatus.OPEN, loginStatus.WIP, loginStatus.COMPLETED];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private isStatusValid(status : any) {
    const index = this.allowedStatus.indexOf(status);

    return index !== -1;
  }

}