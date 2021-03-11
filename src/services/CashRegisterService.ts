import { CouponInterface } from "../interfaces/CouponInterface";
import { ProductInterface } from "../interfaces/ProductInterface";
import { TaxService } from "../services/TaxService";

export class CashRegisterService {
  taxService: TaxService;
  constructor(taxService: TaxService) {
    this.taxService = taxService;
  }
  tallyPrice(products:ProductInterface[]): number {
    let sum = 0;
    for (let product of products) {
      sum += product.price();
    }
    return Math.max(sum, 0.00);
  }
  applyDiscount(product: ProductInterface, coupon: CouponInterface): number {
    const discount = coupon.calculateDiscount(product);
    return product.price() - discount;
  }
  async calculateTax(price: number, state: string): Promise<number> {
    const rate: number = await this.taxService.getTaxRate(state);
    const tax: number = price * (rate / 100);
    return parseFloat(tax.toFixed(2));
  }
}
