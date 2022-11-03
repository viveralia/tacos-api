import tacos from "./tacos.db.json";
import type { CreateTaco, Taco, UpdateTaco } from "./tacos.types";

export const getAll = (): Taco[] => {
  return tacos;
};

export const getById = (id: number): Taco => {
  let getTaco = tacos.find((getTaco) => getTaco.id === id);
  return getTaco;
};

export const add = (newTaco: CreateTaco): Taco => {
  let lastId = tacos.length + 1;
  let createdTaco = {
    id: lastId,
    name: newTaco.name,
    price: newTaco.price
  };
  tacos.push(createdTaco);
  return createdTaco;
};

export const update = (updateTaco: UpdateTaco): Taco => {
  let getTaco = tacos.find((getTaco) => getTaco.id === updateTaco.id);
  let getName = getTaco.name;
  let getprice = getTaco.price;
  let updatedTaco = {
    id: updateTaco.id,
    name: updateTaco.name || getName,
    price: updateTaco.price || getprice
  };
  tacos.splice(getTaco.id - 1, 1, updatedTaco);
  return updatedTaco;
};

export const remove = (id: number): Taco => {
  let getTaco = tacos.find((getTaco) => getTaco.id === id);
  let identifier = getTaco.id;
  tacos.splice(identifier - 1, 1);
  return getTaco
};
