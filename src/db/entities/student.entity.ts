import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class Student{
    @PrimaryGeneratedColumn()
    studentId

    @Column()
    fullName:string;

    @Column()
    height:number;
    
    @Column()
    birthday:Date;
    
    @Column()
    teacherId:number//posteriormente sera FK referente ao professor deste aluno
}