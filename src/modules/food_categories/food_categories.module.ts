import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodCategoriesEntity } from './entity/food_categories.entity';
import { FoodCategoriesController } from './controller/food_categories.controller';
import { FoodCategoriesService } from './service/food_categories.service';
import { ImportService } from 'src/core/service/import.service';
import { ExcelService } from 'src/core/service/excel.service';
@Module({
  imports: [TypeOrmModule.forFeature([FoodCategoriesEntity])],
  controllers: [FoodCategoriesController],
  providers: [FoodCategoriesService, ImportService, ExcelService],
})
export class FoodCategoriesModule {}
