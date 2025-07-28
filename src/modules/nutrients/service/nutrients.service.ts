import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/service/base.service';
import { NutrientsEntity } from '../entity/nutrients.entity';

@Injectable()
export class NutrientsService extends BaseService<NutrientsEntity> {}
