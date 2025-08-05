import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('food_categories')
export class FoodCategoriesEntity extends BaseEntity {}
