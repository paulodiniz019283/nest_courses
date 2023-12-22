import { DataSource } from 'typeorm';
import { CreateCoursesTable1703173895878 } from 'src/migrations/1703173895878-CreateCoursesTable';
import { dataSourceOptions } from './database.module';
import { CreateTagsTable1703180400647 } from 'src/migrations/1703180400647-CreateTagsTable';
import { CreateCoursesTagsTable1703181448040 } from 'src/migrations/1703181448040-CreateCoursesTagsTable';
import { AddCoursesIDtoTagsTable1703181967793 } from 'src/migrations/1703181967793-AddCoursesIDtoTagsTable';
import { AddTagsIDtoCoursesTable1703183589460 } from 'src/migrations/1703183589460-AddTagsIDtoCoursesTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703173895878,
    CreateTagsTable1703180400647,
    CreateCoursesTagsTable1703181448040,
    AddCoursesIDtoTagsTable1703181967793,
    AddTagsIDtoCoursesTable1703183589460,
  ],
});
