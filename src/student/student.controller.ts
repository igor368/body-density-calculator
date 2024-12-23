import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {

    @Post()
    async createStudant(@Body()student:StudentDto){
        return 'this route creats a new student';
    }

    @Get()
    async getStudents(){

    }

    @Delete()
    async delStudents(){

    }

    @Put()
    async updateUser(){
        
    }
}
