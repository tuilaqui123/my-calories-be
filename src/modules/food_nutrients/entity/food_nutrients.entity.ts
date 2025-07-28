import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('food_nutrients')
export class FoodNutrientsEntity extends BaseEntity {}
