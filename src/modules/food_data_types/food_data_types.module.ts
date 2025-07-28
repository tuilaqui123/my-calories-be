import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodDataTypesEntity } from './entity/food_data_types.entity';
import { FoodDataTypesController } from './controller/food_data_types.controller';
import { FoodDataTypesService } from './service/food_data_types.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodDataTypesEntity])],
  controllers: [FoodDataTypesController],
  providers: [FoodDataTypesService],
})
export class FoodDataTypesModule {}
