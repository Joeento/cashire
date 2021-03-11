import { ProductInterface } from "../interfaces/ProductInterface";

export class Bundle implements ProductInterface {
  id: number;
  name: string;
  products: ProductInterface[];
  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
    this.products = [];
  }
  addItem(product: ProductInterface): void {
    this.products.push(product);
  }
  addItems(products: ProductInterface[]): void {
    this.products.concat(products);
  }
  price(): number {
    let sum = 0;
    for (let product of this.products) {
      sum += product.price();
    }
    return Math.max(sum, 0.00);
  }
}
