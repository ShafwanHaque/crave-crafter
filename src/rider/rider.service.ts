import { Injectable } from '@nestjs/common';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rider } from './entities/rider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RiderService {
  //inject rider repository
  constructor(@InjectRepository(Rider) private readonly riderRepository : Repository<Rider>){}

  async create(createRiderDto: CreateRiderDto) : Promise<Rider> {
    // let rider : Rider = new Rider();
    // rider.firstName = createRiderDto.firstName;
    // rider.lastName = createRiderDto.lastName;
    // rider.email = createRiderDto.lastName;
    // rider.phoneNumber = createRiderDto.phoneNumber;
    // rider.address = createRiderDto.address;
    // rider.status = rider.status;

    // return this.riderRepository.save(rider);

      const rider = await this.riderRepository.create(createRiderDto);
          return await this.riderRepository.save(rider);
  }

  findAll() :Promise<Rider[]>{
    return this.riderRepository.find();
  }

  async findOne(id: number) {
    return await this.riderRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateRiderDto: UpdateRiderDto) {
    return await this.riderRepository.update(id,updateRiderDto);
  }

  remove(id: number) {
    return this.riderRepository.delete(id);
  }
}
