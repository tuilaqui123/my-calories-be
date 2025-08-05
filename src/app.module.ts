import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsModule } from './modules/foods/foods.module';
import { BrandedFoodsModule } from './modules/branded_foods/branded_foods.module';
import { FoodAltMeasuresModule } from './modules/food_alt_measures/food_alt_measures.module';
import { FoodCategoriesModule } from './modules/food_categories/food_categories.module';
import { FoodDataTypesModule } from './modules/food_data_types/food_data_types.module';
import { FoundationFoodsModule } from './modules/foundation_foods/foundation_foods.module';
import { FoodNutrientsModule } from './modules/food_nutrients/food_nutrients.module';
import { NutrientsModule } from './modules/nutrients/nutrients.module';
import { LegacyFoodsModule } from './modules/sr_legacy_foods/sr_legacy_foods.module';
import { SurveyFoodsModule } from './modules/survey_foods/survey_foods.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'my-calories',
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FoodsModule,
    BrandedFoodsModule,
    FoodAltMeasuresModule,
    FoodCategoriesModule,
    FoodDataTypesModule,
    FoodNutrientsModule,
    FoundationFoodsModule,
    NutrientsModule,
    LegacyFoodsModule,
    SurveyFoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
