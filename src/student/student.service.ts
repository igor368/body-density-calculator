import { Injectable } from '@nestjs/common';
import { Student } from 'src/db/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly repository: Repository<Student>){}


    async create(dto:CreateStudentDto){
        const student = this.repository.create(dto);
        return this.repository.save(student);
    }

    async findAll(teacherId:number){
        const students = await this.repository.findBy({teacherId})
        
        return  students
    }

    async update(studentId:number, dto:UpdateStudentDto){
        const student = await this.repository.findOneBy({studentId})
        if (!student) return null
        this.repository.merge(student, dto)
        return this.repository.save(student)
    }

    async delete(studentId:number){
        const student = await this.repository.findOneBy({studentId})
        if (!student) return null

        return this.repository.delete(student)
    }
}
