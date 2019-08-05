import {MinLength, MaxLength} from "class-validator";

export class LoginForm {

    @MinLength(5)
    @MaxLength(70)
    username: string;

    @MinLength(5)
    @MaxLength(30)
    password: string;
}