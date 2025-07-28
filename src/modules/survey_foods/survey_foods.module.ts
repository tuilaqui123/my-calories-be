import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyFoodsEntity } from './entity/survey_foods.entity';
import { SurveyFoodsController } from './controller/survey_foods.controller';
import { SurveyFoodsService } from './service/survey_foods.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyFoodsEntity])],
  controllers: [SurveyFoodsController],
  providers: [SurveyFoodsService],
})
export class SurveyFoodsModule {}
