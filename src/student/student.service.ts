import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from 'src/dto/student.dto';
import { Student, StudentDocument } from 'src/schemas/student.schema';

@Injectable()
export class StudentService {
    constructor ( @InjectModel (Student.name) private studentModel: Model<StudentDocument>) {};

    add(body: StudentDto){
        return this.studentModel.create(body);
    }
    findAll(){
        return this.studentModel.find();
    }
    findOne(id: string){
        return this.studentModel.findOne({_id: id});
    }
    update(id: string, body: StudentDto){
        return this.studentModel.findByIdAndUpdate(
            {_id: id},
            {$set: body},
            {new: true}
            );
    }

    delete(id: string){
        return this.studentModel.remove({_id: id});
    }
    Search(key :string){
        const keyword = key ?
        {
            $or:[
                {fullname: {$regex: key, $options :'i'}},
                {email: {$regex: key, $options :'i'}}
            ]
            
        }:{}
        return this.studentModel.find(keyword);
    }
    
}
