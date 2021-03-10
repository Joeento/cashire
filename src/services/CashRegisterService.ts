import { ProductInterface } from "../interfaces/ProductInterface";

export class CashRegisterService {
  static tallyPrice(products:ProductInterface[]): number {
    let sum = 0;
    for (let product of products) {
      sum += product.price();
    }
    return Math.max(sum, 0.00);
  }
}
