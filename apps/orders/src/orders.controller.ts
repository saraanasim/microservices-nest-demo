import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Body() createOrderDto:CreateOrderDto
  ) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  getOrders(  ){
    return this.ordersService.getOrders()

  }

}
