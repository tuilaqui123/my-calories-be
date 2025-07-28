import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodAltMeasuresEntity } from '../entity/food_alt_measures.entity';
import { FoodAltMeasuresService } from '../service/food_alt_measures.service';

@Controller('food_alt_measures')
@Injectable()
export class FoodAltMeasuresController extends BaseController<FoodAltMeasuresEntity> {
  constructor(protected readonly appService: FoodAltMeasuresService) {
    super(appService);
  }
}
