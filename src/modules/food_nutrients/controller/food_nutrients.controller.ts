import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodNutrientsEntity } from '../entity/food_nutrients.entity';
import { FoodNutrientsService } from '../service/food_nutrients.service';

@Controller('food_nutrients')
@Injectable()
export class FoodNutrientsController extends BaseController<FoodNutrientsEntity> {
  constructor(protected readonly appService: FoodNutrientsService) {
    super(appService);
  }
}
