import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoodCategoriesEntity } from '../entity/food_categories.entity';

@Injectable()
export class FoodCategoriesService extends BaseService<FoodCategoriesEntity> {}
