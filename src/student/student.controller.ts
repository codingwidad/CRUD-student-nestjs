import { Controller, Post, Get, Param, Put, Delete, Query, Body, Search} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from 'src/dto/student.dto';

@Controller('student')
export class StudentController {

    constructor(private readonly service: StudentService){};
    @Post()
    add(@Body() body: StudentDto){
        return this.service.add(body);
    }
    @Get()
    findAll(){
        return this.service.findAll();
    }
    @Get('/:id')
    findOne(@Param('id') id: string){
        return this.service.findOne(id);
    }
    
    @Put("/:id")
    update(@Param("id") id: string, @Body() body:StudentDto){
        return this.service.update(id, body);
    }

    @Delete("/:id")
    delete(@Param("id") id: string){
        return this.service.delete(id);
    }   
    @Post('/search')
    Search(@Query('key')key){
        return this.service.Search(key);
    }
}
