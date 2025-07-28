import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoodAltMeasuresEntity } from '../entity/food_alt_measures.entity';

@Injectable()
export class FoodAltMeasuresService extends BaseService<FoodAltMeasuresEntity> {}
