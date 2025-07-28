import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutrientsEntity } from './entity/nutrients.entity';
import { NutrientsController } from './controller/nutrients.controller';
import { NutrientsService } from './service/nutrients.service';

@Module({
  imports: [TypeOrmModule.forFeature([NutrientsEntity])],
  controllers: [NutrientsController],
  providers: [NutrientsService],
})
export class NutrientsModule {}
