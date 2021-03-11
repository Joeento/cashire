import { ProductInterface } from "../interfaces/ProductInterface";
import { CouponInterface } from "../interfaces/CouponInterface";

export class PercentDiscountCoupon implements CouponInterface {
  id: number;
  name: string;
  value: number
  constructor(id: number, name: string, value: number) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
  calculateDiscount(product: ProductInterface): number {
    return this.value * -1;
  }
}
