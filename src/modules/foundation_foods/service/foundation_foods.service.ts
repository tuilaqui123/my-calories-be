import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { FoundationFoodsEntity } from '../entity/foundation_foods.entity';

@Injectable()
export class FoundationFoodsService extends BaseService<FoundationFoodsEntity> {}
