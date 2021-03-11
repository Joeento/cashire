import { CouponInterface } from "../interfaces/CouponInterface";
import { ProductInterface } from "../interfaces/ProductInterface";
export declare class CashRegisterService {
    static tallyPrice(products: ProductInterface[]): number;
    static applyDiscount(product: ProductInterface, coupon: CouponInterface): number;
}
