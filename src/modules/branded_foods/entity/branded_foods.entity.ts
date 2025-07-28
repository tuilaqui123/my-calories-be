import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('branded_foods')
export class BrandedFoodsEntity extends BaseEntity {}
