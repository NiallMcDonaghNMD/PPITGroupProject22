import { userEntity } from "./user.entity";
export declare class loginEntity {
    id: number;
    email: string;
    password: string;
    status: loginStatus;
    user: userEntity;
    userId: number;
}
export declare enum loginStatus {
    OPEN = "OPEN",
    WIP = "WIP",
    COMPLETED = "COMPLETED"
}
