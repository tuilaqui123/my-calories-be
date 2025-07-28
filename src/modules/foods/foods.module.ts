import { Module } from '@nestjs/common';
import { FoodsController } from './controller/foods.controller';
import { FoodsService } from './service/foods.service';
import { FoodsEntity } from './entity/foods.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FoodsEntity])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
