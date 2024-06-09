import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository
  ) { }
  async createOrder(createOrderDto: CreateOrderDto) {
    return await this.ordersRepository.create(createOrderDto)
  }
  async getOrders(){
    return await this.ordersRepository.find({})
  }

}
