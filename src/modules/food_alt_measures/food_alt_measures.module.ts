import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodAltMeasuresEntity } from './entity/food_alt_measures.entity';
import { FoodAltMeasuresController } from './controller/food_alt_measures.controller';
import { FoodAltMeasuresService } from './service/food_alt_measures.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodAltMeasuresEntity])],
  controllers: [FoodAltMeasuresController],
  providers: [FoodAltMeasuresService],
})
export class FoodAltMeasuresModule {}
