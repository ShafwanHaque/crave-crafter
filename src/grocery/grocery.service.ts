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

  findAll() {
    return `This action returns all grocery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grocery`;
  }

  update(id: number, updateGroceryDto: UpdateGroceryDto) {
    return `This action updates a #${id} grocery`;
  }

  remove(id: number) {
    return `This action removes a #${id} grocery`;
  }
}
