import { Controller, Injectable, Post } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { FoodCategoriesEntity } from '../entity/food_categories.entity';
import { FoodCategoriesService } from '../service/food_categories.service';
import { ExcelService } from 'src/core/service/excel.service';
import { ImportService } from 'src/core/service/import.service';

@Controller('food_categories')
@Injectable()
export class FoodCategoriesController extends BaseController<FoodCategoriesEntity> {
  constructor(
    protected readonly appService: FoodCategoriesService,
    protected readonly importService: ImportService,
    protected readonly excelService: ExcelService,
  ) {
    super(appService);
  }

  @Post('/import')
  importData(): any {
    console.log(
      'Importing food categories data from: ' +
        process.cwd() +
        '/src/asset/sup/food_category.csv',
    );

    const filePath = process.cwd() + '/src/asset/sup/food_category.csv';

    var data = this.importService.importFromExcel(
      FoodCategoriesEntity,
      filePath,
    );

    return data;
  }
}
