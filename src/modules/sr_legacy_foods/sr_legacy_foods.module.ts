import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegacyFoodsEntity } from './entity/sr_legacy_foods.entity';
import { LegacyFoodsController } from './controller/sr_legacy_foods.controller';
import { LegacyFoodsService } from './service/sr_legacy_foods.service';

@Module({
  imports: [TypeOrmModule.forFeature([LegacyFoodsEntity])],
  controllers: [LegacyFoodsController],
  providers: [LegacyFoodsService],
})
export class LegacyFoodsModule {}
