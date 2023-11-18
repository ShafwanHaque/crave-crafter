import { Injectable } from "@nestjs/common";
import { CreateAdminDto,  UpdateAdminDto } from "./dto/createAdminDto";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "src/entities/admin.entity";
import { Repository } from "typeorm";
@Injectable()
export class AdminService{

    constructor( @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>){}

    async findAll():Promise<Admin[]>{
        return this.adminRepo.find();
    }
    async findOne(id:number){
       return await this.adminRepo.findOne({where:{id:id}})
    }

    async create(createAdminDto: CreateAdminDto): Promise<Admin>{
        const admin = await this.adminRepo.create(createAdminDto);
        return await this.adminRepo.save(admin);
    }
    async update(id:number, UpdateAdminDto:UpdateAdminDto){
        return await this.adminRepo.update(id,UpdateAdminDto);
    }
    async remove(id:number){
        return this.adminRepo.delete(id);
    }
}