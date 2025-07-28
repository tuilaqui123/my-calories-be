import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoodNutrientsEntity } from '../entity/food_nutrients.entity';

@Injectable()
export class FoodNutrientsService extends BaseService<FoodNutrientsEntity> {}
