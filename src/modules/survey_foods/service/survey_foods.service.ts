import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { SurveyFoodsEntity } from '../entity/survey_foods.entity';

@Injectable()
export class SurveyFoodsService extends BaseService<SurveyFoodsEntity> {}
