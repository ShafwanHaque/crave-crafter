import { Injectable } from '@nestjs/common';
import { CreateGroceryDto } from './dto/create-grocery.dto';
import { UpdateGroceryDto } from './dto/update-grocery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grocery } from './entities/grocery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroceryService {

  //inject grocery repository
  constructor(@InjectRepository(Grocery) private readonly groceryRepository : Repository<Grocery>){
    
  }

  async create(createGroceryDto: CreateGroceryDto) : Promise<Grocery>{
    const grocery = await this.groceryRepository.create(createGroceryDto);
        return await this.groceryRepository.save(grocery);

    //return 'This action adds a new grocery';
  }

  findAll() :Promise<Grocery[]>{
    return this.groceryRepository.find();
  }

  async findOne(id: number) {
    return await this.groceryRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateGroceryDto: UpdateGroceryDto) {
    return await this.groceryRepository.update(id,updateGroceryDto);
  }

  remove(id: number) {
    return this.groceryRepository.delete(id);
  }
}
