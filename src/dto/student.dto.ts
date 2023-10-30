import { IsEmail, IsNotEmpty } from "class-validator";

export class StudentDto{
    @IsNotEmpty()
    fullname : string;
    
    @IsEmail()
    email : string;
    
    @IsNotEmpty()
    age : number;

    @IsNotEmpty()
    country : string;
}

