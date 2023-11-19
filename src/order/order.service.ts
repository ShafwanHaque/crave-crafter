import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  //inject order repository
  constructor(@InjectRepository(Order) private readonly orderRepository : Repository<Order>){

  }

  async create(createOrderDto: CreateOrderDto) : Promise<Order> {
    // let order : Order = new Order();
    // order.customerID = createOrderDto.customerID;
    // order.riderID = createOrderDto.riderID;
    // order.vendorID = createOrderDto.vendorID;
    // order.orderDateandTime = createOrderDto.orderDateandTime;
    // order.deliveryDateandTime = createOrderDto.deliveryDateandTime;
    // order.status = createOrderDto.status;

    // return this.orderRepository.save(order);
 
      const order = await this.orderRepository.create(createOrderDto);
          return await this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
