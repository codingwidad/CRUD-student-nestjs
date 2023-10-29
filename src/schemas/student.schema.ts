import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type StudentDocument = HydratedDocument<Student>

@Schema()
export class Student{

  @Prop( {required: true})
  fullname : string;

  @Prop( {required: true})
  email : string;

  @Prop( {required: true})
  age : number;

  @Prop( {required: true})
  country : string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);