import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodCategoriesEntity } from './entity/food_categories.entity';
import { FoodCategoriesController } from './controller/food_categories.controller';
import { FoodCategoriesService } from './service/food_categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodCategoriesEntity])],
  controllers: [FoodCategoriesController],
  providers: [FoodCategoriesService],
})
export class FoodCategoriesModule {}
