import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('nutrients')
export class SurveyFoodsEntity extends BaseEntity {}
