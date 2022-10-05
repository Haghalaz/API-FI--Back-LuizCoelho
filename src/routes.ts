import { DogsController } from "./controller/DogsController";
import { CatsController } from "./controller/CatsController";

export const Routes = [
  {
    method: "get",
    route: "/dogs",
    controller: DogsController,
    action: "all",
  },
  {
    method: "get",
    route: "/dogs/:id",
    controller: DogsController,
    action: "one",
  },
  {
    method: "post",
    route: "/dogs",
    controller: DogsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/dogs/:id",
    controller: DogsController,
    action: "remove",
  },
  {
    method: "get",
    route: "/cats",
    controller: CatsController,
    action: "all",
  },
  {
    method: "get",
    route: "/cats/:id",
    controller: CatsController,
    action: "one",
  },
  {
    method: "post",
    route: "/cats",
    controller: CatsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/dogs/:id",
    controller: CatsController,
    action: "cats",
  },
];
