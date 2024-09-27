import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DATABASE_URL } from './envs';

const dbConfig: DataSourceOptions = {
  type: 'postgres',
  url: DATABASE_URL, // Usar la variable DATABASE_URL directamente
  // Si decides usar las variables individuales en lugar de DATABASE_URL
  // database: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // port: +process.env.DB_PORT,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: false,
  synchronize: true,
  dropSchema: false,
};

export const databaseConfig = TypeOrmModule.forRoot({
  ...dbConfig,
});

export const connectionSource = new DataSource(dbConfig);
