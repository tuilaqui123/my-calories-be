import { BaseEntity } from 'src/core/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('food_categories')
export class FoodCategoriesEntity extends BaseEntity {
  @Column({ type: 'int', nullable: true })
  code: number;
}
