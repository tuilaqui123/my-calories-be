import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandedFoodsEntity } from './entity/branded_foods.entity';
import { BrandedFoodsController } from './controller/branded_foods.controller';
import { BrandedFoodsService } from './service/branded_foods.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrandedFoodsEntity])],
  controllers: [BrandedFoodsController],
  providers: [BrandedFoodsService],
})
export class BrandedFoodsModule {}
