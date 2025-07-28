import { Controller, Get, Injectable } from '@nestjs/common';
import { FoodsService } from '../service/foods.service';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodsEntity } from '../entity/foods.entity';

@Controller('foods')
@Injectable()
export class FoodsController extends BaseController<FoodsEntity> {
  constructor(protected readonly appService: FoodsService) {
    super(appService);
  }

  @Get('/hello/*')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello2')
  getHello2(): string {
    return this.appService.getHello2();
  }
}
