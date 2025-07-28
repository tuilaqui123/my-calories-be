import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodCategoriesEntity } from '../entity/food_categories.entity';
import { FoodCategoriesService } from '../service/food_categories.service';

@Controller('food_categories')
@Injectable()
export class FoodCategoriesController extends BaseController<FoodCategoriesEntity> {
  constructor(protected readonly appService: FoodCategoriesService) {
    super(appService);
  }
}
