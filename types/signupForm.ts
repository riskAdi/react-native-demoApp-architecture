import {MinLength, MaxLength} from "class-validator";

export class SignupForm {

    @MinLength(7)
    @MaxLength(20)
    mobile: string;

    @MinLength(5)
    @MaxLength(20)
    password: string;
}