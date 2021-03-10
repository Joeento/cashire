import { ProductInterface } from "../interfaces/ProductInterface";

export class Fruit implements ProductInterface {
  id: number;
  name: string;
  costPerPound: number;
  pounds: number;
  constructor(id:number, name:string, costPerPound:number, pounds:number) {
    this.id = id;
    this.name = name;
    this.costPerPound = costPerPound;
    this.pounds = pounds;
  }
  price(): number {
    return this.costPerPound * this.pounds;
  }
}
