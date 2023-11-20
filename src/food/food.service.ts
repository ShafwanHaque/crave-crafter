import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FoodService {

  //inject food repository
  constructor(@InjectRepository(Food) private readonly foodRepository : Repository<Food>){}

  async create(createFoodDto: CreateFoodDto) : Promise<Food>{
    const food = await this.foodRepository.create(createFoodDto);
        return await this.foodRepository.save(food);

    //return 'This action adds a new food';
  }

  findAll() :Promise<Food[]>{
    return this.foodRepository.find();
  }

  async findOne(id: number) {
    return await this.foodRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    return await this.foodRepository.update(id,updateFoodDto);
  }

  remove(id: number) {
    return this.foodRepository.delete(id);
  }
}