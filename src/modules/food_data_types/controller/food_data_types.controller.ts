import { Controller, Get, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodDataTypesEntity } from '../entity/food_data_types.entity';
import { FoodDataTypesService } from '../service/food_data_types.service';

@Controller('foods')
@Injectable()
export class FoodDataTypesController extends BaseController<FoodDataTypesEntity> {
  constructor(protected readonly appService: FoodDataTypesService) {
    super(appService);
  }
}
