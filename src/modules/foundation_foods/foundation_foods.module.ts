import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundationFoodsEntity } from './entity/foundation_foods.entity';
import { FoundationFoodsController } from './controller/foundation_foods.controller';
import { FoundationFoodsService } from './service/foundation_foods.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoundationFoodsEntity])],
  controllers: [FoundationFoodsController],
  providers: [FoundationFoodsService],
})
export class FoundationFoodsModule {}
