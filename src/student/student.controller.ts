import { Controller, Post, Get, Param, Put, Delete, Query} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly service: StudentService){};
    @Post()
    Add(){
        return 'add student';
    }
    @Get()
    FindAll(){
        return 'all students';
    }
    @Get("/:id")
    FindOne(@Param("id") id: string){
        return id;
    }
    @Put("/:id")
    Update(@Param("id") id: string){
        return id;
    }
    @Delete("/:id")
    Delete(@Param("id") id: string){
        return id;
    }
    @Post("/search")
    Search(@Query("key") key){
        return key;
    }
    
    
}
