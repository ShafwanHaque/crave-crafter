import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateAdminDto, UpdateAdminDto } from "./dto/createAdminDto";
import { AdminService } from "./admin.service";
import { CommentService } from "src/comment/comment.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {Response} from "express";
import  * as path from "path";

interface FileParams {
  fileName : string;
}

@Controller('admin')
@UsePipes(new ValidationPipe())
export class AdminController{
    constructor(private readonly adminService: AdminService, private readonly commentService:CommentService){

    }
    
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id:number){
        return this.adminService.findOne(id);
    }

    @Get()
    findAll(){
        return this.adminService.findAll();
    }

    @Post()
    create(@Body() createAdminDto:CreateAdminDto){ 
        return this.adminService.create(createAdminDto);
    }

    @Get(":id/comments")
    getAdminComment(@Param("id") id:string){

        return this.commentService.findUserComments(id);
    }

    @Patch(":id")
    update(@Param("id", ParseIntPipe) id:number, @Body()UpdateAdminDto:UpdateAdminDto){
        return this.adminService.update(id,UpdateAdminDto);
    }

    @Delete(":id")
    remove(@Param('id', ParseIntPipe)id:string){
        return this.adminService.remove(+id);
    }

    file: any;
    @Post("/upload")
  @UseInterceptors(FileInterceptor('file' , {
    storage : diskStorage({
      destination : "./uploads",
      filename : (req , file , cb) => {
        cb(null , `${file.originalname}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file: any) {
    console.log("Uploaded file:", file);
    return "success";
  }


    @Get("/getFile/:fileName")
    getFile(@Res() res: Response, @Param('fileName') fileName: string) {
        res.sendFile(path.join(__dirname, "../uploads/" + fileName));
    }

}