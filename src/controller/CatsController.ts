import { AppDataSource } from "../data-source";
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Cat } from "../entity/Cat";

export class CatsController {
  private dogRepository = AppDataSource.getRepository(Cat);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.dogRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.dogRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.dogRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let dogToRemove = await this.dogRepository.findOneBy({
      id: request.params.id,
    });
    await this.dogRepository.remove(dogToRemove);
  }
}
