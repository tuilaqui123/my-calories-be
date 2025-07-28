import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity } from 'typeorm';

@Entity('food_data_types')
export class FoodCategoriesEntity extends BaseEntity {}
