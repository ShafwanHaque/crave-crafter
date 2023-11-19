import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(@InjectRepository(Customer) private readonly customerRepository: Repository<Customer>){}

  async create(createCustomerDto: CreateCustomerDto) : Promise<Customer> {
    const customer = await this.customerRepository.create(createCustomerDto);
        return await this.customerRepository.save(customer);
  }

  // findAll() {
  //   return `This action returns all customer`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`;
  // }

  // update(id: number, updateCustomerDto: UpdateCustomerDto) {
  //   return `This action updates a #${id} customer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} customer`;
  // }
  findAll() :Promise<Customer[]>{
    return this.customerRepository.find();
  }

  async findOne(id: number) {
    return await this.customerRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerRepository.update(id,updateCustomerDto);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }

}
