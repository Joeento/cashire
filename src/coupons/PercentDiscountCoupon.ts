import { ProductInterface } from "../interfaces/ProductInterface";
import { CouponInterface } from "../interfaces/CouponInterface";

export class PercentDiscountCoupon implements CouponInterface {
  id: number;
  name: string;
  percent: number
  constructor(id: number, name: string, percent: number) {
    this.id = id;
    this.name = name;
    this.percent = percent;
  }
  calculateDiscount(product: ProductInterface): number {
    return product.price() * (this.percent / 100);
  }
}
