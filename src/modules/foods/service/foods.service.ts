import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoodsEntity } from '../entity/foods.entity';

@Injectable()
export class FoodsService extends BaseService<FoodsEntity> {
  getHello(): string {
    return 'Hello from FoodsService!';
  }

  getHello2(): string {
    return 'Hello2 from FoodsService!';
  }
}
