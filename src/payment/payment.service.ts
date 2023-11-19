import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class PaymentService {
  //inject payment repository
  constructor(@InjectRepository(Payment) private readonly paymentRepository : Repository<Payment>){


  }

  async create(createPaymentDto: CreatePaymentDto) : Promise<Payment>{
    // let payment : Payment = new Payment();
    // payment.orderID = createPaymentDto.orderID;
    // payment.paymentDateandTime = payment.paymentDateandTime;
    // payment.paymentType = payment.paymentType;
    // payment.status = payment.status;

    // return this.paymentRepository.save(payment);
  
      const payment = await this.paymentRepository.create(createPaymentDto);
          return await this.paymentRepository.save(payment);
  }

  findAll() :Promise<Payment[]>{
    return this.paymentRepository.find();
  }

  async findOne(id: number) {
    return await this.paymentRepository.findOne({where:{id:id}})
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return await this.paymentRepository.update(id,updatePaymentDto);
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
