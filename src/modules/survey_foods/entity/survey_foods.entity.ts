import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('survey_foods')
export class SurveyFoodsEntity extends BaseEntity {}
