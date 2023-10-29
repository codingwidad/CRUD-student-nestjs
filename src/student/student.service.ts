import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from 'src/schemas/student.schema';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

    async Add(): Promise<Student>{
        return new this.studentModel()
    }
    FindAll(){
        return 'find all student'
    }
    FindOne(){
        return 'find student'
    }
    Update(){
        return 'Update student'
    }

    Delete(){
        return 'delete student'
    }
    Search(){
        return 'search student'
    }
}
