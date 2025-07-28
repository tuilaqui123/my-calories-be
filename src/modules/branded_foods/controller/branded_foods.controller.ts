import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { BrandedFoodsEntity } from '../entity/branded_foods.entity';
import { BrandedFoodsService } from '../service/branded_foods.service';

@Controller('nutrients')
@Injectable()
export class BrandedFoodsController extends BaseController<BrandedFoodsEntity> {
  constructor(protected readonly appService: BrandedFoodsService) {
    super(appService);
  }
}
