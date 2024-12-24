import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateStudentDto{
    @IsString()
    fullName:string;

    @IsNumber()
    height:number;

    @IsDateString()
    birthday:string;

    @IsNumber()
    teacherId:number
}