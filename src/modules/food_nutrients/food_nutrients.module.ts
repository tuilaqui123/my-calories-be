import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodNutrientsEntity } from './entity/food_nutrients.entity';
import { FoodNutrientsController } from './controller/food_nutrients.controller';
import { FoodNutrientsService } from './service/food_nutrients.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodNutrientsEntity])],
  controllers: [FoodNutrientsController],
  providers: [FoodNutrientsService],
})
export class FoodNutrientsModule {}
