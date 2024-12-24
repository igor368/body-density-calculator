import { Body, Controller, Delete, Get, Post, Patch, Param } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    @Post()
    async createStudent(@Body()student:CreateStudentDto){
        return this.studentService.create(student)
    }

    @Get(':teacherId')
    async getStudents(@Param('teacherId') teacherId:number){
        return this.studentService.findAll(teacherId)
    }

    @Patch(':studentId')
    async updateUser(@Param('studentId')studentId:number,@Body()studet:UpdateStudentDto){
        return this.studentService.update(studentId,studet)
    }

    @Delete(':studentId')
    async delStudents(@Param('studentId') studentId:number){
        return this.studentService.delete(studentId)

    }

}
