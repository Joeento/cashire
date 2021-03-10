import { ProductInterface } from "../interfaces/ProductInterface";

export class Cereal implements ProductInterface {
  id:number;
  name:string;
  cost:number
  constructor(id:number, name:string, cost:number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }
  price():number {
    return cost;
  }
}
