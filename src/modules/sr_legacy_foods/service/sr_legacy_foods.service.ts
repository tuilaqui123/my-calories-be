import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { LegacyFoodsEntity } from '../entity/sr_legacy_foods.entity';

@Injectable()
export class LegacyFoodsService extends BaseService<LegacyFoodsEntity> {}
