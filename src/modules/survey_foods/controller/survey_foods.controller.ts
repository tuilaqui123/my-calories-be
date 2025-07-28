import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { SurveyFoodsEntity } from '../entity/survey_foods.entity';
import { SurveyFoodsService } from '../service/survey_foods.service';

@Controller('nutrients')
@Injectable()
export class SurveyFoodsController extends BaseController<SurveyFoodsEntity> {
  constructor(protected readonly appService: SurveyFoodsService) {
    super(appService);
  }
}
