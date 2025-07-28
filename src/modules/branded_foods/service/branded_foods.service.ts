import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { BrandedFoodsEntity } from '../entity/branded_foods.entity';

@Injectable()
export class BrandedFoodsService extends BaseService<BrandedFoodsEntity> {}
