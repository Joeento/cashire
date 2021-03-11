import { ProductInterface } from "../interfaces/ProductInterface";
import { CouponInterface } from "../interfaces/CouponInterface";
export declare class PercentDiscountCoupon implements CouponInterface {
    id: number;
    name: string;
    percent: number;
    constructor(id: number, name: string, percent: number);
    calculateDiscount(product: ProductInterface): number;
}
