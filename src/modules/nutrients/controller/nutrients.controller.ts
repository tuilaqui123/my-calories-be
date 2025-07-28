import { Controller, Injectable } from '@nestjs/common';
import { BaseController } from 'src/core/controller/base.controller';
import { NutrientsEntity } from '../entity/nutrients.entity';
import { NutrientsService } from '../service/nutrients.service';

@Controller('nutrients')
@Injectable()
export class NutrientsController extends BaseController<NutrientsEntity> {
  constructor(protected readonly appService: NutrientsService) {
    super(appService);
  }
}
