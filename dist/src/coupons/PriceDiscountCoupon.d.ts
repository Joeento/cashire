import { ProductInterface } from "../interfaces/ProductInterface";
import { CouponInterface } from "../interfaces/CouponInterface";
export declare class PriceDiscountCoupon implements CouponInterface {
    id: number;
    name: string;
    value: number;
    constructor(id: number, name: string, value: number);
    calculateDiscount(product: ProductInterface): number;
}
