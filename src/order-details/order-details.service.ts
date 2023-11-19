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

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
