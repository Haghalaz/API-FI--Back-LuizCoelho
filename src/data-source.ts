import "reflect-metadata";
import { DataSource } from "typeorm";
import { Dog } from "./entity/DogLC";
import { Cat } from "./entity/CatLC";
import { UserWR } from "./entity/UserWR";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "faculdade",
  synchronize: true,
  logging: false,
  entities: [Dog, Cat, UserWR],
});
