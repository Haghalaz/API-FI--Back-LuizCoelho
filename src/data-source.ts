import "reflect-metadata";
import { DataSource } from "typeorm";
import { Dog } from "./entity/Dog";
import { Cat } from "./entity/Cat";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "faculdade",
  synchronize: true,
  logging: false,
  entities: [Dog, Cat],
});
