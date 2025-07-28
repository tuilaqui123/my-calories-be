import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoodDataTypesEntity } from '../entity/food_data_types.entity';

@Injectable()
export class FoodDataTypesService extends BaseService<FoodDataTypesEntity> {}
