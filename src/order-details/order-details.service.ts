import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class OrderDetailsService {
  //inject order details repository
  constructor(@InjectRepository(OrderDetail) private readonly orderDetailsRepository : Repository<OrderDetail>){

  }


  async create(createOrderDetailDto: CreateOrderDetailDto) : Promise<OrderDetail>{
    // let orderDetails : OrderDetail = new OrderDetail();
    // orderDetails.orderID = createOrderDetailDto.orderID;
    // orderDetails.productID = createOrderDetailDto.productID;
    // orderDetails.unitPrice = createOrderDetailDto.unitPrice;
    // orderDetails.quantity = createOrderDetailDto.quantity;
    // orderDetails.tootalPrice = createOrderDetailDto.tootalPrice;

    // return this.orderDetailsRepository.save(orderDetails);

      const orderDetail = await this.orderDetailsRepository.create(createOrderDetailDto);
          return await this.orderDetailsRepository.save(orderDetail);
  }

  findAll() :Promise<OrderDetail[]>{
    return this.orderDetailsRepository.find();
  }

  async findOne(id: number) {
    return await this.orderDetailsRepository.findOne({where:{id:id}})
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return await this.orderDetailsRepository.update(id,updateOrderDetailDto);
  }

  remove(id: number) {
    return this.orderDetailsRepository.delete(id);
  }
}
