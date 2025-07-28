import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { LegacyFoodsEntity } from '../entity/sr_legacy_foods.entity';
import { LegacyFoodsService } from '../service/sr_legacy_foods.service';

@Controller('legacy_foods')
@Injectable()
export class LegacyFoodsController extends BaseController<LegacyFoodsEntity> {
  constructor(protected readonly appService: LegacyFoodsService) {
    super(appService);
  }
}
