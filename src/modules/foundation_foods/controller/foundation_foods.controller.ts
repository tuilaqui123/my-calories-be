import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoundationFoodsEntity } from '../entity/foundation_foods.entity';
import { FoundationFoodsService } from '../service/foundation_foods.service';

@Controller('nutrients')
@Injectable()
export class FoundationFoodsController extends BaseController<FoundationFoodsEntity> {
  constructor(protected readonly appService: FoundationFoodsService) {
    super(appService);
  }
}
