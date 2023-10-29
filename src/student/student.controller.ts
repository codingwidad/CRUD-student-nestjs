import { Controller, Post, Get, Param, Put, Delete, Query} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly service: StudentService){};
    @Post()
    Add(){
        return this.service.Add;
    }
    @Get()
    FindAll(){
        return this.service.FindAll;
    }
    @Get("/:id")
    FindOne(@Param("id") id: string){
        return this.service.FindOne;
    }
    @Put("/:id")
    Update(@Param("id") id: string){
        return this.service.Update;
    }
    @Delete("/:id")
    Delete(@Param("id") id: string){
        return this.service.Delete;
    }
    @Post("/search")
    Search(@Query("key") key){
        return this.service.Search;
    }
    
    
}
