import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateAdminDto, UpdateAdminDto } from "./dto/createAdminDto";
import { AdminService } from "./admin.service";
import { CommentService } from "src/comment/comment.service";

@Controller('admin')

export class AdminController{
    constructor(private readonly adminService: AdminService, private readonly commentService:CommentService){

    }
    
    @Get(":id")
    findOne(@Param("id") id:number){
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
    update(@Param("id") id:number, @Body()UpdateAdminDto:UpdateAdminDto){
        return this.adminService.update(id,UpdateAdminDto);
    }

    @Delete(":id")
    remove(@Param('id')id:string){
        return this.adminService.remove(+id);
    }


}