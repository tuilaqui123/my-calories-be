import { BaseEntity } from 'src/core/entity/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('foods')
export class FoodsEntity extends BaseEntity {
  //   @ManyToOne(() => FoodCategory, { nullable: true })
  //   @JoinColumn({ name: 'category_id' })
  //   category: FoodCategory;

  //   @ManyToOne(() => FoodDataType, { nullable: true })
  //   @JoinColumn({ name: 'data_type_id' })
  //   dataType: FoodDataType;

  @Column({ type: 'int', nullable: true })
  servingQty: number;

  @Column({ type: 'text', nullable: true })
  servingUnit: string;

  @Column({ type: 'decimal', nullable: true })
  servingWeightGrams: number;

  @Column({ type: 'decimal', nullable: true })
  calories: number;

  @Column({ type: 'text', nullable: true })
  imageThumb: string;

  @Column({ type: 'text', nullable: true })
  imageHighres: string;

  @Column({ type: 'boolean', nullable: true })
  isRawFood: boolean;

  @Column({ type: 'text', nullable: true })
  ndbNo: string;
}
