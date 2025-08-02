import { Injectable } from '@nestjs/common';
import { DataSource, ObjectLiteral, Repository } from 'typeorm';
import { ExcelService } from './excel.service';

@Injectable()
export class ImportService {
  constructor(
    private readonly excelService: ExcelService,
    private readonly dataSource: DataSource,
  ) {}

  async importFromExcel<T extends ObjectLiteral>(
    entityClass: new () => T,
    filePath: string,
  ): Promise<number> {
    const repo: Repository<T> = this.dataSource.getRepository(entityClass);

    const excelData = this.excelService.readFromExcel(filePath);
    const records: import('typeorm').DeepPartial<T>[] = Array.isArray(
      excelData[0],
    )
      ? excelData.flat()
      : excelData;

    const entities = repo.create(records);
    await repo.save(entities);

    console.log(
      `✅ Imported ${entities.length} records into ${entityClass.name}`,
    );
    return entities.length;
  }
}
