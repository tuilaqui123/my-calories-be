import { BaseEntity } from 'src/core/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('nutrients')
export class NutrientsEntity extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  unit: string;

  @Column({ type: 'int', nullable: false })
  number: string;
}
